const decode58Check = require("./crypto").decode58Check;
const {Block, Transaction, Account} = require("../protocol/core/Tron_pb");
const google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
const base64DecodeFromString = require("../lib/code").base64DecodeFromString;
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
} = require("../protocol/core/Contract_pb");

function encodeString(str) {
  return Uint8Array.from(base64DecodeFromString(btoa(str)));
}

function buildTransferContract(message, contractType, typeName) {
  var anyValue = new google_protobuf_any_pb.Any();
  anyValue.pack(message.serializeBinary(), "protocol." + typeName);

  var contract = new Transaction.Contract();
  contract.setType(contractType);
  contract.setParameter(anyValue);

  var raw = new Transaction.raw();
  raw.addContract(contract);
  raw.setTimestamp(new Date().getTime() * 1000000);

  var transaction = new Transaction();
  transaction.setRawData(raw);

  return transaction;
}

function buildTransferTransaction(token, from, to, amount) {

  if (token.toUpperCase() === 'TRX') {

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
  console.log("SET RURL", url);
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
  var contract = new VoteWitnessContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));

  for (let address of Object.keys(votes)) {
    var vote = new VoteWitnessContract.Vote();
    vote.setVoteAddress(Uint8Array.from(decode58Check(address)))
    var numberOfVotes = parseInt(votes[address]);
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
  var contract = new ParticipateAssetIssueContract();

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
  var contract = new AssetIssueContract();
  contract.setOwnerAddress(Uint8Array.from(decode58Check(options.address)));
  contract.setName(encodeString(options.name));
  contract.setTotalSupply(options.totalSupply);
  contract.setNum(options.num);
  contract.setEndTime(Date.parse(options.endTime));
  contract.setStartTime(Date.parse(options.startTime));
  contract.setTrxNum(options.trxNum);
  contract.setDescription(encodeString(options.description));
  contract.setUrl(encodeString(options.url));

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
 */
function buildFreezeBalance(address, amount, duration) {
  var contract = new FreezeBalanceContract();

  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));
  contract.setFrozenBalance(amount);
  contract.setFrozenDuration(duration);

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.FREEZEBALANCECONTRACT,
    "FreezeBalanceContract");
}

/**
 * Unfreeze balance
 *
 * @param address From which address to freze
 */
function buildUnfreezeBalance(address) {
  var contract = new UnfreezeBalanceContract();

  contract.setOwnerAddress(Uint8Array.from(decode58Check(address)));

  return buildTransferContract(
    contract,
    Transaction.Contract.ContractType.UNFREEZEBALANCECONTRACT,
    "UnfreezeBalanceContract");
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
};

