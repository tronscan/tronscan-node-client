const decode58Check = require("./crypto").decode58Check;
const { Block, Transaction, Account } = require("../protocol/core/Tron_pb");
const google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
const { encodeString } = require("../lib/code");
const { byte2hexStr, byteArray2hexStr } = require("./bytes");

const {
  TransferContract,
  TransferAssetContract,
  AccountUpdateContract,
  VoteWitnessContract,
  ParticipateAssetIssueContract,
  AssetIssueContract,
  FreezeBalanceContract,
  UnfreezeBalanceContract,
  WitnessUpdateContract,
  WithdrawBalanceContract,
  WitnessCreateContract,
  UnfreezeAssetContract,
  ExchangeCreateContract,
  ExchangeInjectContract,
  ExchangeWithdrawContract,
  ExchangeTransactionContract,
  UpdateAssetContract,
  TriggerSmartContract,
  AccountPermissionUpdateContract,
} = require("../protocol/core/Contract_pb");

const fromHexString = hexString => new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

function parameterValue2hexStr(message, contractType, typeName) {
  let anyValue = new google_protobuf_any_pb.Any();
  return byteArray2hexStr(message.serializeBinary());
}


function buildTransferHexStr(token, from, to, amount) {
  if (token === '_') {
    let transferContract = new TransferContract();
    transferContract.setToAddress(Uint8Array.from(decode58Check(to)));
    transferContract.setOwnerAddress(Uint8Array.from(decode58Check(from)));
    transferContract.setAmount(amount);
    return parameterValue2hexStr(
      transferContract,
      Transaction.Contract.ContractType.TRANSFERCONTRACT,
      "TransferContract");
  } else {
    let transferContract = new TransferAssetContract();
    transferContract.setToAddress(Uint8Array.from(decode58Check(to)));
    transferContract.setOwnerAddress(Uint8Array.from(decode58Check(from)));
    transferContract.setAmount(amount);
    transferContract.setAssetName(encodeString(token));
    return parameterValue2hexStr(
      transferContract,
      Transaction.Contract.ContractType.TRANSFERASSETCONTRACT,
      "TransferAssetContract");
  }
}

function buildTransferContract(message, contractType, typeName, permissionId) {
  let anyValue = new google_protobuf_any_pb.Any();
  anyValue.pack(message.serializeBinary(), "protocol." + typeName);
  let contract = new Transaction.Contract();
  contract.setType(contractType);
  contract.setParameter(anyValue);
  if(permissionId){
    contract.setPermissionId(permissionId);
  }
  let raw = new Transaction.raw();
  raw.addContract(contract);
  // raw.setTimestamp(new Date().getTime() * 1000000);
  let transaction = new Transaction();
  transaction.setRawData(raw);
  return transaction;
}



function buildTransferTransaction(token, from, to, amount) {

  if (token === '_') {

    let transferContract = new TransferContract();
    transferContract.setToAddress(Uint8Array.from(decode58Check(to)));
    transferContract.setOwnerAddress(Uint8Array.from(decode58Check(from)));
    transferContract.setAmount(amount);

    return buildTransferContract(
      transferContract,
      Transaction.Contract.ContractType.TRANSFERCONTRACT,
      "TransferContract");
  } else {

    let transferContract = new TransferAssetContract();
    transferContract.setToAddress(Uint8Array.from(decode58Check(to)));
    transferContract.setOwnerAddress(Uint8Array.from(decode58Check(from)));
    transferContract.setAmount(amount);
    transferContract.setAssetName(encodeString(token));

    return buildTransferContract(
      transferContract,
      Transaction.Contract.ContractType.TRANSFERASSETCONTRACT,
      "TransferAssetContract");
  }
}

function buildAccountUpdate(address, name) {
  let contract = new AccountUpdateContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setAccountName(encodeString(name));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.ACCOUNTUPDATECONTRACT,
    "AccountUpdateContract");
}

function buildAssetUpdate(address, description, url) {
  let contract = new UpdateAssetContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setDescription(encodeString(description));
  contract.setUrl(encodeString(url));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.UPDATEASSETCONTRACT,
    "UpdateAssetContract");
}

function buildWitnessCreate(address, url) {
  let contract = new WitnessCreateContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setUrl(encodeString(url));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.WITNESSCREATECONTRACT,
    "WitnessCreateContract");
}

function buildWitnessUpdate(address, url) {
  let contract = new WitnessUpdateContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setUpdateUrl(encodeString(url));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.WITNESSUPDATECONTRACT,
    "WitnessUpdateContract");
}

function buildWithdrawBalance(address) {
  let contract = new WithdrawBalanceContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.WITHDRAWBALANCECONTRACT,
    "WithdrawBalanceContract");
}

function buildVote(address, votes) {
  let contract = new VoteWitnessContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));

  for (let address of Object.keys(votes)) {
    let vote = new VoteWitnessContract.Vote();
    vote.setVoteAddress(Uint8Array.from(decode58Check(address)));
    let numberOfVotes = parseInt(votes[address]);
    if (isNaN(numberOfVotes) || numberOfVotes <= 0) {
      continue;
    }
    vote.setVoteCount(numberOfVotes);
    contract.addVotes(vote);
  }

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.VOTEWITNESSCONTRACT,
    "VoteWitnessContract");
}


function buildAssetParticipate(address, issuerAddress, token, amount) {
  let contract = new ParticipateAssetIssueContract();

  contract.setToAddress(Uint8Array.from(decode58Check(issuerAddress)));
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setAssetName(encodeString(token));
  contract.setAmount(amount);

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.PARTICIPATEASSETISSUECONTRACT,
    "ParticipateAssetIssueContract");
}

function buildAssetIssue(options) {

  let contract = new AssetIssueContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(options.address)));
  contract.setName(encodeString(options.name));
  contract.setAbbr(encodeString(options.shortName));
  contract.setTotalSupply(options.totalSupply);
  contract.setNum(options.num);
  contract.setEndTime(Date.parse(options.endTime));
  contract.setStartTime(Date.parse(options.startTime));
  contract.setTrxNum(options.trxNum);
  contract.setPrecision(options.precision);
  contract.setDescription(encodeString(options.description));
  contract.setUrl(encodeString(options.url));
  contract.setPublicFreeAssetNetUsage(0);
  contract.setFreeAssetNetLimit(0);
  contract.setPublicFreeAssetNetLimit(0);

  if (options.frozenSupply) {
    for (let frozenSupply of options.frozenSupply) {
      let frozenSupplyContract = new AssetIssueContract.FrozenSupply();
      frozenSupplyContract.setFrozenAmount(frozenSupply.amount);
      frozenSupplyContract.setFrozenDays(frozenSupply.days);
      contract.addFrozenSupply(frozenSupplyContract);
    }
  }

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.ASSETISSUECONTRACT,
    "AssetIssueContract");
}

/**
 * Freeze balance
 *
 * @param address From which address to freze
 * @param amount The amount of TRX to freeze
 * @param duration Duration in days
 * @param andwith or energy   Bandwidth Point = 0，Energy = 1
 */
function buildFreezeBalance(address, amount, duration, resource, receiver) {
  let contract = new FreezeBalanceContract();

  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setFrozenBalance(amount);
  contract.setFrozenDuration(duration);
  contract.setResource(resource);
  if (receiver) {
    contract.setReceiverAddress(Uint8Array.from(decode58Check(receiver)));
  }
  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.FREEZEBALANCECONTRACT,
    "FreezeBalanceContract");
}

/**
 * Unfreeze balance
 *
 * @param address From which address to freeze
 */
function buildUnfreezeBalance(address, resource, receiver) {
  let contract = new UnfreezeBalanceContract();

  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setResource(resource);
  if (receiver) {
    contract.setReceiverAddress(Uint8Array.from(decode58Check(receiver)));
  }
  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.UNFREEZEBALANCECONTRACT,
    "UnfreezeBalanceContract");
}

/**
 * Unfreeze Assets
 *
 * @param address From which address to unfreeze
 */
function buildUnfreezeAsset(address) {
  let contract = new UnfreezeAssetContract();

  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.UNFREEZEASSETCONTRACT,
    "UnfreezeAssetContract");
}

/**
 * Create Exchange
 *
 * @param address From  which address to create exchange
 * @param firstTokenID  The first token id
 * @param secondTokenId  The second token id
 * @param firstTokenBalance   The balance of the first token
 * @param secondTokenBalance  The balance of the second token
 */
function buildExchangeCreate(address, firstTokenID, secondTokenId, firstTokenBalance, secondTokenBalance) {
  let contract = new ExchangeCreateContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setFirstTokenId(encodeString(firstTokenID));
  contract.setFirstTokenBalance(firstTokenBalance);
  contract.setSecondTokenId(encodeString(secondTokenId));
  contract.setSecondTokenBalance(secondTokenBalance);

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.EXCHANGECREATECONTRACT,
    "ExchangeCreateContract");
}

/**
 * Inject Exchange
 *
 * @param address  From which address to create exchange
 * @param exchangeId  The id of the transaction pair
 * @param tokenId  The id of the token to be funded
 * @param quant  The amount of the token to be injected
 */
function buildExchangeInject(address, exchangeId, tokenId, quant) {
  let contract = new ExchangeInjectContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setExchangeId(exchangeId);
  contract.setTokenId(encodeString(tokenId));
  contract.setQuant(quant);

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.EXCHANGEINJECTCONTRACT,
    "ExchangeInjectContract");
}

/**
 * Withdraw Exchange
 *
 * @param address  From which address to create exchange
 * @param exchangeId  The id of the transaction pair
 * @param tokenId  The id of the token to be funded
 * @param quant  The amount of the token to be injected
 */
function buildExchangeWithdraw(address, exchangeId, tokenId, quant) {
  let contract = new ExchangeWithdrawContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setExchangeId(exchangeId);
  contract.setTokenId(encodeString(tokenId));
  contract.setQuant(quant);

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.EXCHANGEWITHDRAWCONTRACT,
    "ExchangeWithdrawContract");
}


/**
 * Withdraw Exchange
 *
 * @param address  From which address to create exchange
 * @param exchangeId  The id of the transaction pair
 * @param tokenId  The id of the token to be funded
 * @param quant  The amount of the token to be injected
 * @param expected  The minimum amount of another token expected to be obtained. If it is less than this value, the transaction will not succeed
 */
function buildTransactionExchange(address, exchange_id, token_id, quant, expected) {
  let contract = new ExchangeTransactionContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setExchangeId(exchange_id);
  contract.setTokenId(encodeString(token_id));
  contract.setQuant(quant);
  contract.setExpected(expected)

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.EXCHANGETRANSACTIONCONTRACT,
    "ExchangeTransactionContract");
}

/**
 * Trigger Smart Contract
 *
 * @param value  transaction parameter value
*/
function buildTriggerSmartContract(value) {
  let contract = new TriggerSmartContract();

  contract.setOwnerAddress(fromHexString(value.owner_address));
  contract.setContractAddress(fromHexString(value.contract_address));
  contract.setData(fromHexString(value.data));
  if(value.token_id){
    contract.setTokenId(value.token_id);
  }
  if(value.call_token_value){
    contract.setCallTokenValue(value.call_token_value)
  }
  if(value.call_value){
    contract.setCallValue(value.call_value);
  }
  return parameterValue2hexStr(
    contract,
    Transaction.Contract.ContractType.TRIGGERSMARTCONTRACT,
    "TriggerSmartContract");
}

/**
 * Account Permission Update Contract
 *
 * @param value  transaction parameter value
 */

function buildAccountPermissionUpdateContract(value) {
  let contract = new AccountPermissionUpdateContract();
  const { owner, actives, witness, owner_address } = value;
  //contract.owner
  //set ownerAddress
  contract.setOwnerAddress(fromHexString(owner_address));
  //set owner
  const { keys, permission_name, threshold } = owner;
  {
      const permissionType = proto.protocol.Permission.PermissionType.OWNER;
      let ownerPermission = new proto.protocol.Permission();

      keys.forEach((item) => {
        let key = new proto.protocol.Key();
        key.setAddress(fromHexString(item.address));
        key.setWeight(item.weight);
        ownerPermission.addKeys(key)
      })
      ownerPermission.setPermissionName(permission_name);
      ownerPermission.setThreshold(threshold)
      contract.setOwner(ownerPermission);
  }
  {
      if (witness) {
          const { keys, permission_name, threshold,id } = witness;
          let witnessPermission = new proto.protocol.Permission();
          const permissionType = proto.protocol.Permission.PermissionType.WITNESS;
          keys.forEach((item) => {
            let key = new proto.protocol.Key();
            key.setAddress(fromHexString(item.address));
            key.setWeight(item.weight);
            witnessPermission.addKeys(key)
          })
          witnessPermission.setId(id);
          witnessPermission.setPermissionName(permission_name);
          witnessPermission.setThreshold(threshold);
          witnessPermission.setType(permissionType);
          contract.setWitness(witnessPermission);
      }
  }


  // active
  {
      const permissionType = proto.protocol.Permission.PermissionType.ACTIVE;

      actives.forEach((active) => {
        let activePermission = new proto.protocol.Permission();
        activePermission.setThreshold(active.threshold)
        activePermission.setType(permissionType)
        activePermission.setPermissionName(active.permission_name)
        activePermission.setOperations(fromHexString(active.operations));
        activePermission.setId(active.id);
        active.keys.forEach((item) => {
          let key = new proto.protocol.Key();
          key.setAddress(fromHexString(item.address));
          key.setWeight(item.weight);
          activePermission.addKeys(key);
        })
        contract.addActives(activePermission);
      })
  }
  return parameterValue2hexStr(
      contract,
      Transaction.Contract.ContractType.ACCOUNTPERMISSIONUPDATECONTRACT,
      "AccountPermissionUpdateContract");
}


/**
 * Trigger Smart Contract Parameter Value
 *
 * @param bytes type bytes parameter value 
 */
function getTriggerSmartContractParameterValue(bytes) {
    let contract = new TriggerSmartContract();
    let transaction = proto.protocol.TriggerSmartContract.deserializeBinary(bytes);
    let contract_address = byteArray2hexStr(transaction.getContractAddress());
    let data = byteArray2hexStr(transaction.getData());
    let owner_address = byteArray2hexStr(transaction.getOwnerAddress());
    let call_value = byteArray2hexStr(transaction.getCallValue());
    let parameterValue  = {
        contract_address,
        data,
        call_value,
        owner_address
    }
    return parameterValue
}

/**
 * Transfer Contract Parameter Value
 *
 * @param bytes type bytes parameter value 
 */
function getTransferContractParameterValue(bytes) {
  let transferContract = new TransferContract();
  let transaction = proto.protocol.TransferContract.deserializeBinary(bytes);
  let owner_address = byteArray2hexStr(transaction.getOwnerAddress());
  let to_address = byteArray2hexStr(transaction.getToAddress());
  let amount = transaction.getAmount();
  let parameterValue  = {
    owner_address,
    to_address,
    amount,
  }
  return parameterValue
}

/**
 * Transfer Asset Contract Parameter Value
 *
 * @param bytes type bytes parameter value 
 */
function getTransferAssetContractParameterValue(bytes) {
  let transferContract = new TransferAssetContract();
  let transaction = proto.protocol.TransferAssetContract.deserializeBinary(bytes);
  let asset_name = byteArray2hexStr(transaction.getAssetName());
  let to_address = byteArray2hexStr(transaction.getToAddress());
  let amount = transaction.getAmount();
  let owner_address = byteArray2hexStr(transaction.getOwnerAddress());
  let parameterValue  = {
    owner_address,
    to_address,
    amount,
    asset_name
  }
  return parameterValue
}

/**
 * Account Permission Update Contract Parameter Value
 *
 * @param bytes type bytes parameter value 
 */
function getAccountPermissionUpdateContractParameterValue(bytes) {
  let accountPermissionUpdateContract = new AccountPermissionUpdateContract();
  let transaction = proto.protocol.AccountPermissionUpdateContract.deserializeBinary(bytes);
  
  let owner_address = byteArray2hexStr(transaction.getOwnerAddress());

  //get owner
  const permissionType = proto.protocol.Permission.PermissionType.OWNER;
  let ownerPermission = transaction.getOwner();
  let ownerKeys = ownerPermission.getKeysList();
  let ownerKeysArr = [];
  ownerKeys.forEach((key) => {
    ownerKeysArr.push({
      'address':byteArray2hexStr(key.getAddress()),
      'weight':key.getWeight()
    })  
  })
  let ownerThreshold = ownerPermission.getThreshold() 
  let ownerPermissionName = ownerPermission.getPermissionName();
  let owner = {
      "keys":ownerKeysArr,
      "threshold":ownerThreshold,
      "permission_name":ownerPermissionName
  }
  let witness =''
  if (transaction.getWitness()) {
      let witnessPermission = transaction.getWitness();
      let witnessKeys = witnessPermission.getKeysList();
      let witnessKeysArr = [];
      witnessKeys.forEach((key) => {
        ownerKeysArr.push({
          'address':byteArray2hexStr(key.getAddress()),
          'weight':key.getWeight()
        })  
      })
      let witnessId = witnessPermission.getId(); 
      let witnessThreshold = witnessPermission.getThreshold(); 
      let witnessPermissionName = witnessPermission.getPermissionName();
      let witnessType = witnessPermission.getType(); 
      witness = {
        "keys":witnessKeysArr,
        "id":witnessId,
        "threshold":witnessThreshold,
        "permission_name":witnessPermissionName,
        "type":witnessType
      }
  }
  // active
  let activesPermission = transaction.getActivesList();
  let actives = [];
  activesPermission.forEach((active) => {
    let activeKeys = active.getKeysList();
    let activeKeysArr = [];
    activeKeys.forEach((key) => {
      activeKeysArr.push({
        'address':byteArray2hexStr(key.getAddress()),
        'weight':key.getWeight()
      })  
    })
    actives.push(
      {
        "operations": byteArray2hexStr(active.getOperations()),
        "keys": activeKeysArr,
        "threshold":active.getThreshold(),
        "id":active.getId(),
        "type":active.getType(),
        "permission_name":active.getPermissionName()
      }
    )
  })

  let parameterValue  = {
    owner,
    actives, 
    witness:transaction.getWitness()?witness:'', 
    owner_address
  }
  return parameterValue
}




module.exports = {
  buildTransferTransaction,
  buildAccountUpdate,
  buildAssetParticipate,
  buildVote,
  buildFreezeBalance,
  buildUnfreezeBalance,
  buildAssetIssue,
  buildWitnessUpdate,
  buildWithdrawBalance,
  buildWitnessCreate,
  buildUnfreezeAsset,
  buildExchangeCreate,
  buildExchangeInject,
  buildExchangeWithdraw,
  buildTransactionExchange,
  buildTransferContract,
  buildAssetUpdate,
  buildTransferHexStr,
  buildTriggerSmartContract,
  buildAccountPermissionUpdateContract,
  getTriggerSmartContractParameterValue,
  getTransferContractParameterValue,
  getTransferAssetContractParameterValue,
  getAccountPermissionUpdateContractParameterValue,
};

