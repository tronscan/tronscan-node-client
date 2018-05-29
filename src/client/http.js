const xhr = require("axios");
const {
  buildTransferTransaction, buildVote, buildAssetParticipate, buildFreezeBalance, buildAssetIssue,
  buildUnfreezeBalance, buildAccountUpdate, buildWitnessUpdate, buildWithdrawBalance, buildWitnessCreate,
  buildUnfreezeAsset,
} = require("../utils/transactionBuilder");
const {hexStr2byteArray} = require("../lib/code");
const PrivateKeySigner = require("../signer/privateKeySigner");
const pkToAddress = require("../utils/crypto").pkToAddress;

function longToByteArray(/*long*/long) {
  // we want to represent the input as a 8-bytes array
  var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

  for ( var index = 0; index < byteArray.length; index ++ ) {
    var byte = long & 0xff;
    byteArray [ index ] = byte;
    long = (long - byte) / 256 ;
  }

  return byteArray;
}

function byteArrayToLong(/*byte[]*/byteArray) {
  var value = 0;
  for ( var i = byteArray.length - 1; i >= 0; i--) {
    value = (value * 256) + byteArray[i];
  }

  return value;
}

class ApiClient {

  constructor() {
    this.apiUrl = process.env.API_URL;
    this.signer = null;
  }

  setSigner(signer) {
    this.signer = signer;
  }

  send(token, from, to, amount) {
    let transaction = buildTransferTransaction(token, from, to, amount);
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
    let {data} = await xhr.post(`${this.apiUrl}/api/transaction`, {
      transaction: hex,
    });

    return data;
  }

  async sendTransactionRaw(transactionHex) {
    let {data} = await xhr.post(`${this.apiUrl}/api/transaction`, {
      transaction: transactionHex,
    });

    return data;
  }

  async auth(pk) {
    let transaction = buildTransferTransaction("TRX", pkToAddress(pk), pkToAddress(pk), 1);
    let privateKeySigner = this.getSigner(pk);
    let {hex} = await privateKeySigner.signTransaction(transaction);

    let {data} = await xhr.post(`${this.apiUrl}/api/auth`, {
      transaction: hex,
    });

    return data.key;
  }

  async updateSuperRepresentative(key, sr) {
    let {data} = await xhr.post(`${this.apiUrl}/api/account/${sr.address}/sr`, sr, {
      headers: {
        "X-Key": key,
      }
    });
  }

  async getSuperRepresentative(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/sr`);
    return data.data;
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

  freezeBalance(address, amount, duration) {
    let transaction = buildFreezeBalance(address, amount, duration);
    return (pk) => this.sendTransaction(pk, transaction);
  }

  unfreezeBalance(address) {
    let transaction = buildUnfreezeBalance(address);
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
    console.log("create token", options);
    let transaction = buildAssetIssue(options);
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
      total: data.total,
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
      total: data.total,
    };
  }

  async getBlockByNumber(number) {
    let {blocks} = await this.getBlocks({
      limit: 1,
      number,
    });

    return blocks[0];
  }

  async getBlockByHash(hash) {
    let {blocks} = await this.getBlocks({
      limit: 1,
      hash,
    });

    return blocks[0];
  }

  async getTransactionByHash(hash) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transaction/${hash}`);
    return data;
  }

  async getIssuedAsset(owner) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token`, {
      params: {
        owner,
      },
    });
    return {
      token: data.data[0],
      data,
    };
  }

  async getAccounts(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account`, {
      params: Object.assign({
        sort: '-balance',
        limit: 50,
      }, options)
    });

    return {
      accounts: data.data,
      total: data.total,
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

  async getLiveVotes() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/live`);
    return data.data;
  }

  async getTransferStats(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/transfer/stats`, {
      params: Object.assign({
      }, options)
    });

    return {
      stats: data,
    };
  }

  async getBlockStats(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/block/stats`, {
      params: Object.assign({

      }, options)
    });

    return {
      stats: data,
    };
  }

  async getAddress(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}`);
    return data;
  }

  async getAddressMedia(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/media`);
    return data;
  }

  async getAddressStats(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/stats`);
    return data;
  }

  async getTokens(options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token`, {
      params: Object.assign({
        sort: '-name',
        limit: 50,
      }, options)
    });

    return {
      tokens: data.data,
      total: data.total,
    }
  }

  async getAccountVotes(address) {
    let {data} = await xhr.get(`${this.apiUrl}/api/account/${address}/votes`);
    return data;
  }

  async getToken(name) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token/${name}`);
    return data;
  }

  async getTokenHolders(name, options = {}) {
    let {data} = await xhr.get(`${this.apiUrl}/api/token/${name}/address`, {
      params: Object.assign({
        sort: '-balance',
        limit: 50,
      }, options)
    });

    return {
      addresses: data.data,
      total: data.total,
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

  async getVoteStats() {
    let {data} = await xhr.get(`${this.apiUrl}/api/vote/stats`);
    return data.results;
  }
}

module.exports = ApiClient;
