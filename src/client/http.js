const xhr = require("axios");
const {
  buildTransferTransaction, buildVote, buildAssetParticipate, buildFreezeBalance, buildAssetIssue,
  buildUnfreezeBalance, buildAccountUpdate, buildWitnessUpdate, buildWithdrawBalance, buildWitnessCreate,
  buildUnfreezeAsset, buildExchangeCreate, buildExchangeInject, buildExchangeWithdraw, buildTransactionExchange,
  buildTransferHexStr, buildTriggerSmartContract,getTriggerSmartContractParameterValue, getTransferContractParameterValue,
  getTransferAssetContractParameterValue,getAccountPermissionUpdateContractParameterValue
} = require("../utils/transactionBuilder");
const {hexStr2byteArray} = require("../lib/code");
const PrivateKeySigner = require("../signer/privateKeySigner");
const encodeString = require("../lib/code").encodeString;
const pkToAddress = require("../utils/crypto").pkToAddress;

function longToByteArray(/*long*/long) {
  // we want to represent the input as a 8-bytes array
  var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var index = 0; index < byteArray.length; index++) {
    var byte = long & 0xff;
    byteArray [index] = byte;
    long = (long - byte) / 256;
  }

  return byteArray;
}

function byteArrayToLong(/*byte[]*/byteArray) {
  var value = 0;
  for (var i = byteArray.length - 1; i >= 0; i--) {
    value = (value * 256) + byteArray[i];
  }

  return value;
}

class ApiClient {

  constructor(url) {
    this.apiUrl = url;
    this.signer = null;
  }

  setSigner(signer) {
    this.signer = signer;
  }

  send(token, from, to, amount) {
    let transaction = buildTransferTransaction(token, from, to, amount);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  getSendHexStr(token, from, to, amount) {
      let hexStr = buildTransferHexStr(token, from, to, amount);
      return hexStr;
  }


  sendWithNote(token, from, to, amount, note) {
    let transaction = buildTransferTransaction(token, from, to, amount);
    if (note.length > 0) {
      let rawData = transaction.getRawData();
      rawData.setData(encodeString(encodeURIComponent(note)));
      transaction.setRawData(rawData);
    }

    return (pk) => this.sendTransaction(pk, transaction);
  }

  async addRef(transaction) {

    let latestBlock = await this.getLatestBlock();

    let latestBlockHash = latestBlock.hash;
    let latestBlockNum = latestBlock.number;

    let numBytes = longToByteArray(latestBlockNum);
    numBytes.reverse();
    let hashBytes = hexStr2byteArray(latestBlockHash);

    let generateBlockId = [...numBytes.slice(0, 8), ...hashBytes.slice(8, hashBytes.length - 1)];

    let rawData = transaction.getRawData();
    rawData.setRefBlockHash(Uint8Array.from(generateBlockId.slice(8, 16)));
    rawData.setRefBlockBytes(Uint8Array.from(numBytes.slice(6, 8)));
    rawData.setExpiration(latestBlock.timestamp + (60 * 5 * 1000));

    transaction.setRawData(rawData);
    return transaction;
  }

  getSigner(pk) {
    return this.signer || new PrivateKeySigner(pk);
  }

  async sendTransaction(pk, transaction) {
    transaction = await this.addRef(transaction);
    let privateKeySigner = this.getSigner(pk);
    let {hex} = await privateKeySigner.signTransaction(transaction);
    let {data} = await xhr.post(`${this.apiUrl}/api/broadcast`, {
      transaction: hex,
    });

    return data;
  }

  async sendTransactionRaw(transactionHex) {
    let {data} = await xhr.post(`${this.apiUrl}/api/broadcast`, {
      transaction: transactionHex,
    });

    return data;
  }

  async auth(pk) {
    let transaction = buildWitnessUpdate(pkToAddress(pk), "UPDATE_SR");
    let privateKeySigner = this.getSigner(pk);
    let {hex} = await privateKeySigner.signTransaction(transaction);
    let {data} = await xhr.post(`${this.apiUrl}/api/auth`, {
      transaction: hex,
    });

    return data.key;
  }

  async updateSuperRepresentative(key, sr) {
    await xhr.post(`${this.apiUrl}/api/account/${sr.address}/sr`, sr, {
      headers: {
        "X-Key": key,
      }
    });
  }

  async getSuperRepresentative(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/sr?address=`+address);
    return data;
  }

  updateAccountName(address, name) {
    let transaction = buildAccountUpdate(address, name);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  updateWitnessUrl(address, url) {
    let transaction = buildWitnessUpdate(address, url);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  withdrawBalance(address) {
    let transaction = buildWithdrawBalance(address);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  freezeBalance(address, amount, duration, resource,receiver) {
    let transaction = buildFreezeBalance(address, amount, duration, resource,receiver);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  unfreezeBalance(address, resource,receiver) {
    let transaction = buildUnfreezeBalance(address, resource,receiver);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  unfreezeAssets(address) {
    let transaction = buildUnfreezeAsset(address);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  applyForDelegate(address, url) {
    let transaction = buildWitnessCreate(address, url);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  voteForWitnesses(address, votes) {
    let transaction = buildVote(address, votes);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  participateAsset(address, issuerAddress, token, amount) {
    let transaction = buildAssetParticipate(address, issuerAddress, token, amount);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  createToken(options) {
    let transaction = buildAssetIssue(options);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  createExchange(address, firstTokenID, secondTokenId, firstTokenBalance, secondTokenBalance) {
    let transaction = buildExchangeCreate(address, firstTokenID, secondTokenId, firstTokenBalance, secondTokenBalance);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  injectExchange(address, exchangeId, tokenId, quant) {
    let transaction = buildExchangeInject(address, exchangeId, tokenId, quant);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  withdrawExchange(address, exchangeId, tokenId, quant) {
    let transaction = buildExchangeWithdraw(address, exchangeId, tokenId, quant);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  transactionExchange(address, exchange_id, token_id, quant, expected) {
    let transaction = buildTransactionExchange(address, exchange_id, token_id, quant, expected);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  async getBlocks(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/block`, {
      params: Object.assign({
        sort: '-number',
        limit: 50,
        count: true,
      }, options),
    });

    return {
      blocks: data.data,
      total: data.total,
      rangeTotal:data.rangeTotal,
    };
  }

  async getLatestBlock() {
    let {data} = await xhr.get(`${this.apiUrl}/api/block/latest`);
    return data;
  }

  async getTransactions(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transaction`, {
      params: Object.assign({
        sort: '-timestamp',
        count: true,
        limit: 50,
      }, options)
    });

    return {
      transactions: data.data,
      contractMap:data.contractMap,
      contractInfo:data.contractInfo,
      total: data.total,
      rangeTotal: data.rangeTotal,
      wholeChainTxCount: data.wholeChainTxCount
    };
  }

  async getTransfers(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transfer`, {
      params: Object.assign({
        sort: '-timestamp',
        count: true,
        limit: 50,
      }, options)
    });

    return {
      transfers: data.data,
      contractMap:data.contractMap,
      contractInfo:data.contractInfo,
      total: data.total,
      rangeTotal: data.rangeTotal,
    };
  }

  async getParticipateProject(address,options = {}) {
    let data = await xhr.get(`${this.apiUrl}/api/participate_project`,
      {
        params: Object.assign({
          address
        }, options)
      })
    return data

  }

  async getBlockByNumber(options = {}) {
    let {blocks} = await this.getBlocks(
      Object.assign(
        {limit: 1,},
        options
      )
    );

    return blocks[0];
  }

  async getBlockByHash(hash) {
    let {blocks} = await this.getBlocks({
      limit: 1,
      hash,
    });

    return blocks[0];
  }

  async getTransactionByHash(hash,options) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transaction-info`,
    {
      params: Object.assign({
        hash
      }, options),
    })
    return data;
  }


  async getIssuedAsset(owner) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token`, {
      params: {
        showAll: 1,
        owner: owner,
      },
    });
    return {
      token: data.data[0],
      data,
    };
  }

  async getAccounts(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/list`, {
      params: Object.assign({
        sort: '-balance',
        limit: 50,
      }, options)
    });

    return {
      accounts: data.data,
      contractMap:data.contractMap,
      contractInfo:data.contractInfo,
      total: data.total,
      rangeTotal:data.rangeTotal,
    };
  }

  async getVotes(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote`, {
      params: Object.assign({
        sort: '-timestamp',
        limit: 50,
      }, options)
    });

    return {
      votes: data.data,
      total: data.total,
      totalVotes: data.totalVotes,
    };
  }

  async secondsUntilNextCycle() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/next-cycle`);
    return data.nextCycle / 1000;
  }


  async getAccountByAddress(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}`);
    return data;
  }

  async getRichList() {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/richlist`);
    return data;
  }

  async getVotesForCurrentCycle() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/current-cycle`);
    return data;
  }

  async getVotesList() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/witness`)
    return data
  }

  async getLiveVotes() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/live`)
    return data.data;
  }

  async getTransferStats(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transfer/stats`, {
      params: Object.assign({}, options)
    });

    return {
      stats: data,
    };
  }

  async getBlockStats(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/block/stats`, {
      params: Object.assign({}, options)
    });

    return {
      stats: data,
    };
  }

  async getAddress(address,options) {
    let {data} = await xhr.get(`${this.apiUrl}/api/accountv2`, {
      params: Object.assign({
        address,
      }, options)
    })
    return data;
  }

  async getAddressMedia(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/media`);
    return data;
  }

  async getAddressStats(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/stats?address=` + address);
    return data;
  }

  async getTokens(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token`, {
      params: Object.assign({
        sort: 'rank',
        limit: 50,
      }, options)
    });

    return {
      tokens: data.data,
      total: data.total,
    }
  }

  async getAccountVotes(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/votes?address=` + address);
    return data;
  }

  async getToken(name) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token/${name}`);
    return data;
  }

  async getTokenHolders(name, options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/tokenholders`, {
      params: Object.assign({
        sort: '-balance',
        limit: 50,
      }, options)
    });

    return {
      addresses: data.data,
      total: data.total,
      rangeTotal:data.rangeTotal,
      contractMap:data.contractMap
    };
  }

  async getWitnesses() {
    let {data} = await xhr.get(`${this.apiUrl}/api/witness`);

    return {
      witnesses: data,
      total: data.length,
    };
  }

  async getNodeLocations() {
    let {data} = await xhr.get(`${this.apiUrl}/api/nodemap`);

    return {
      nodes: data,
      total: data.length,
    };
  }

  async getNodes() {
    let {data} = await xhr.get(`${this.apiUrl}/api/node`);

    return {
      nodes: data.nodes,
      total: data.nodes.length,
      status: data.status,
    };
  }

  async getAccountBalances(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/balance`);
    return data;
  }

  async getSystemStatus() {
    let {data} = await xhr.get(`${this.apiUrl}/api/system/status`);
    return data;
  }

  async getMarkets() {
    let {data} = await xhr.get(`${this.apiUrl}/api/market/markets`);
    return data;
  }

  async readTransaction(transactionHex) {
    let {data} = await xhr.post(`${this.apiUrl}/api/transaction?dry-run`, {
      transaction: transactionHex,
    });
    return data;
  }

  async readTransactionNew(transactionHex) {
    let {data} = await xhr.post(`${this.apiUrl}/api/transaction?dry-run=1`, {
      transaction: transactionHex,
    });
    return data;
  }

  async getVoteStats() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/stats`);
    return data.results;
  }

  async getTxOverviewStats() {
    let {data} = await xhr.get(`${this.apiUrl}/api/stats/overview`);
    return {
      txOverviewStats: data.data
    }
  }

  async getTxOverviewStatsAll(number) {
    let {data} = await xhr.get(`${this.apiUrl}/api/stats/overview?days=${number}`);
    return {
      txOverviewStats: data.data
    }
  }

  async getStatisticData() {
    let {data} = await xhr.get(`${this.apiUrl}/api/witness/maintenance-statistic`);
    return {
      statisticData: data
    }
  }

  async getVoteWitness(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/witness?address=` + address);
    return data
  }

  async contractsVerify(verifyData) {
    let {data} = await xhr.post(`${this.apiUrl}/api/contracts/verify`, verifyData);
    return data;
  }

  async getContracts(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contracts`, {
      params: Object.assign({
        count: true,
        limit: 40,
      }, options)
    });

    return data;
  }

  async getContractTxs(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contracts/transaction`, {
      params: Object.assign({
        sort: '-timestamp',
        count: true,
        limit: 50,
      }, options)
    });

    return data;
  }

  async getContractOverview(address,options) {
    // let {data} = await xhr.get(`${this.apiUrl}/api/contract?contract=` + address);
    let {data} = await xhr.get(`${this.apiUrl}/api/contract`, {
      params: Object.assign({
        contract:address,
      }, options)
    })
    return data;
  }

  async getContractCode(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contracts/code?contract=${address}`);

    return data;
  }

  async getContractEvent(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contracts/event?contract=${address}`);

    return data;
  }


  async getContractTriggers(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contracts/trigger`, {
      params: Object.assign({
        sort: '-timestamp',
        confirm: 0,
        count: true,
        limit: 50,
      }, options)
    });

    return {
      triggers: data.data,
      contractInfo:data.contractInfo,
      contractMap:data.contractMap,
      total: data.total,
      rangeTotal:data.rangeTotal
    };
  }

  async getAccountByAddressNew(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/accountv2?address=` + address);
    return data;
  }

  async getExchangesList(options = {}) {
      let {data} = await xhr.get(`https://bancor.trx.market/api/exchanges/list`, {
          params: Object.assign({
              sort: '-balance',
          }, options)
      });
      return data;
  }

  async exchange(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/api/exchange/transaction`, options);
    return data;
  }

  async getExchangesKline(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/exchange/kgraph`, {
      params: options
    });

    return data
  }


  async getTransactionList(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/exchange/transaction`, {
      params: Object.assign({
        sort: '-timestamp',
        start: 0,
        limit: 50,
      }, options)
    });
    return data
  }

  async getChainparameters() {
    let {data} = await xhr.get(`${this.apiUrl}/api/chainparameters`);
    return {
      tronParameters: data.tronParameters,
    }
  }

  async getProposalList(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/proposal`, {
      params: Object.assign({
        sort: '-timestamp',
        limit: 50,
      }, options)
    });
    return {
      proposal: data.data,
      total: data.total
    }
  }

  async getProposalById(id) {
    let {data} = await xhr.get(`${this.apiUrl}/api/proposal?id=` + id);
    return {
      data: data
    }
  }

  async getHolderBalance(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token_trc20/holder_balance`, {
      params: options
    });
    return data
  }

  async getexchangesAllList(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/exchanges/listall`, {
      params: options
    });
    return {
      exchangesAllList: data
    }
  }

  async getFundsSupply(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/funds`, {
      params: options
    });
    return {
      funds: data
    }
  }

  async getBttFundsSupply(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/bittorrent/fund`, {
      params: options
    });
    return {
      funds: data
    }
  }

  async getlistdonators(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/listdonators`, {
      params: options
    });
    return {
      list: data
    }
  }

  async getNotices(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/announcement`, {
      params: Object.assign({type: 1, start: 0, limit: 10, status: 0}, options)
    });
    return data
  }


  async getTRC20tfs(options = {}) {
      let {data} = await xhr.get(`${this.apiUrl}/api/contract/events`, {
        params: options
      });

      return {
        list: data.data,
        total: data.total,
        rangeTotal:data.rangeTotal,
      };
  }

  async getAddressTokens(options={}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/tokens`, {
      params: options
    });

    return {
      data
    };
  }

  async getInternalTransaction(options = {}) {
      let {data} = await xhr.get(`${this.apiUrl}/api/internal-transaction`, {
        params: options
      });

      return {
        list: data.data,
        contractMap:data.contractMap,
        contractInfo:data.contractInfo,
        total: data.total,
        rangeTotal:data.rangeTotal,
      };
  }

  async getAssetTransfers(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/asset/transfer`, {
      params: options
    });

    return {
      list: data.Data,
      total: data.total,
      rangeTotal:data.rangeTotal,
    };
  }

  async getTokenTRC20Transfers(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token_trc20/transfers`, {
      params: options
    });

    return {
      list: data.token_transfers,
      contractInfo:data.contractInfo,
      total: data.total,
      rangeTotal:data.rangeTotal,
    };
  }

  async getTransfersAll(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/trc10trc20-transfer`, {
      params: Object.assign({
        sort: '-timestamp',
        count: true,
        limit: 50,
      }, options)
    });

    return {
      transfers: data.transfers,
      contractMap:data.contractMap,
      total: data.total,
      rangeTotal: data.rangeTotal,
    };
  }

  async getContractInfo(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/contract?contract=${address}`);
    return data;
  }

  async createToken20(options = {}) {
      let {data} = await xhr.post(`${this.apiUrl}/external/trc20tokens`, options);
      return data;
  }

   async createToken1155(options = {}) {
      let {data} = await xhr.post(`${this.apiUrl}/external/trc1155tokens`, options);
      return data;
  }

  async createToken721(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/external/trc721tokens`, options);
    return data;
}

  async updateToken721(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/external/trc721tokens/update`, options);
    return data;
  }

  async updateToken1155(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/external/trc1155tokens/update`, options);
    return data;
  }

  async updateToken20(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/external/trc20tokens/update`, options);
    return data;
  }

  async updateToken10(options = {}) {
    let {data} = await xhr.post(`${this.apiUrl}/external/trc10tokens/update`, options);
    return data;
  }


  async getTps(time) {
    let {data} = await xhr.get(`${this.apiUrl}/api/system/tps?time=${time}`);
    return data;
  }

  async getTagNameList() {
      return [
          { name: 'binance', addressList: {
              Cold: ['TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9', 'TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb'],
              Hot: ['TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX']}
          },{
              name: 'Upbit', addressList: {
                  Hot: ['TDU1uJNxDND9zhzYjnn7ZunHj18jw7oAca']
              }
          },{
              name: 'Okex', addressList: {
                  default: ['TM1zzNDZD2DPASbKcgdVoTYhfmYgtfwx9R','TS1P2y41FEaxvNNktvriTbjKHpQPKoRvic']
              }
          },{
              name: 'Huobi', addressList: {
                  default: ['TNaRAoLUyYEV2uF7GUrzSjRQTU8v5ZJ5VR']
              }
          },{
              name: 'Bittrex', addressList: {
                  Hot: ['TAahLbGTZk6YuCycii72datPQEtyC5x231'],
                  default: ['TA5vCXk4f1SrCMfz361UxUNABRGP1g2F1r']
              }
          },{
              name: 'Kucoin', addressList: {
                  default: ['TLWE45u7eusdewSDCjZqUNmyhTUL1NBMzo','TBcUJq55x7Q83ZSr2AqWj59TRj2LvxVr8a']
              }
          },{
              name: 'Gate', addressList: {
                  default: ['TBA6CypYJizwA9XdC7Ubgc5F1bxrQ7SqPt']
              }
          },{
              name: 'poloniex', addressList: {
                  default: ['TNCmcTdyrYKMtmE1KU2itzeCX76jGm5Not']
              }
          },
          {
              name: 'bitfinex', addressList: {
                  default: ['TXFBqBbqJommqZf7BV8NNYzePh97UmJodJ']
              }
          }
      ];
  }
    async getCountByType(params) {
        let {data} = await xhr.get(`${this.apiUrl}/api/count`,{params});
        return data;
    }

    async getUserList(params) {
        let {data} = await xhr.post(`https://tronscan.org/users/getUserList`, params);

        return {
            data: data.data,
            total: data.total,
        };
    }
    async getAddressReward(params) {
        let {data} = await xhr.get(`${this.apiUrl}/api/address/reward`,{params});
        return data;
    }

    getTriggerSmartContractHexStr(value) {
        let hexStr = buildTriggerSmartContract(value);
        return hexStr;
    }

     getParameterValue (hexStr,ContractType){
        let hexStrBytes = hexStr2byteArray(hexStr);
        let parameterValue;
        let parameter = {};
        switch (ContractType) {
          case "TransferContract": {
            parameterValue = getTransferContractParameterValue(hexStrBytes)
            return parameterValue;
          }
          case "TransferAssetContract": {
            parameterValue = getTransferAssetContractParameterValue(hexStrBytes)
            return parameterValue;
          }
          case "TriggerSmartContract": {
            parameterValue = getTriggerSmartContractParameterValue(hexStrBytes)
            for(let i in parameterValue){
              if(parameterValue[i] !== ''){
                parameter[i] = parameterValue[i]
              }
            }
            return parameter;
          }
          case "AccountPermissionUpdateContract": {
            // let contractData = await xhr.post(`https://tronexapi.tronscan.org/api/contract/convert`, {
            //   "outType":"json",
            //   "data":hexStr,
            //   "contractType":ContractType
            // });
            // parameterValue =  contractData.data.message
            parameterValue = getAccountPermissionUpdateContractParameterValue(hexStrBytes)
            for(let i in parameterValue){
              if(parameterValue[i] !== ''){
                parameter[i] = parameterValue[i]
              }
            }
            return parameter;
          }

        }



    }

    /*
    * get account token list
    */
    async getAccountWallet(params) {
      let {data} = await xhr.get(`${this.apiUrl}/api/account/wallet`,{params});
      return data;
    }

    /*
    * get search token
    */
    async getAccountTokenSearch(params) {
      let {data} = await xhr.get(`${this.apiUrl}/api/token/search`,{params});
      return data;
    }

    /*
    ** account add  show token list
    */
    async getAccountAddShowList(params) {
      let {data} = await xhr.post(`${this.apiUrl}/external/account/addShowList`,params);
      return data;
    }


    /*
    ** account add  show block list
    */
    async getAccountAddBlockList(params) {
      let {data} = await xhr.post(`${this.apiUrl}/external/account/addBlockList`,params);
      return data;
    }

    /*
    ** tvc total value on chain
    */
    async getTVCData(params) {
      let {data} = await xhr.get(`${this.apiUrl}/api/tokenTvc`,{params});
      return data;
    }

    /*
    * get account token list
    */
    async getAccountWallet(params) {
      let {data} = await xhr.get(`${this.apiUrl}/api/account/wallet`,{params});
      return data;
    }

    /*
    * get search token
    */ 
    async getAccountTokenSearch(params) {
      let {data} = await xhr.get(`${this.apiUrl}/api/token/search`,{params});
      return data;
    }

    /*
    ** account add  show token list
    */
    async getAccountAddShowList(params) {
      let {data} = await xhr.post(`${this.apiUrl}/external/account/addShowList`,params);
      return data;
    }


    /*
    ** account add  show block list
    */
    async getAccountAddBlockList(params) {
      let {data} = await xhr.post(`${this.apiUrl}/external/account/addBlockList`,params);
      return data;
    }


}

module.exports = ApiClient;
