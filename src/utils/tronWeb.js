const { buildTransferContract } = require("./transactionBuilder");
const {Block, Transaction, Account} = require("../protocol/core/Tron_pb");

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
} = require("../protocol/core/Contract_pb");

const fromHexString = hexString =>
  new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

export function transactionJsonToProtoBuf(transaction) {

  const rawData = transaction.raw_data;
  const contractJson = rawData.contract[0];
  const transactionObj = contractJsonToProtobuf(contractJson);

  const rawDataObj = transactionObj.getRawData();

  rawDataObj.setRefBlockBytes(fromHexString(rawData.ref_block_bytes));
  rawDataObj.setRefBlockHash(fromHexString(rawData.ref_block_hash));
  if (rawData.expiration) {
    rawDataObj.setExpiration(rawData.expiration);
  }

  if (rawData.timestamp) {
    rawDataObj.setTimestamp(rawData.timestamp);
  }

  transactionObj.setRawData(rawDataObj);

  return transactionObj;
}

export function contractJsonToProtobuf(contract) {

  const value = contract.parameter.value;

  switch (contract.type) {

    case "TransferContract": {
      const {to_address, owner_address, amount} = value;
      let transferContract = new TransferContract();
      transferContract.setToAddress(fromHexString(to_address));
      transferContract.setOwnerAddress(fromHexString(owner_address));
      transferContract.setAmount(amount);

      return buildTransferContract(
        transferContract,
        Transaction.Contract.ContractType.TRANSFERCONTRACT,
        contract.type);
    }

    case "TransferAssetContract": {
      const {to_address, owner_address, amount, asset_name} = value;
      let transferContract = new TransferAssetContract();
      transferContract.setToAddress(fromHexString(to_address));
      transferContract.setOwnerAddress(fromHexString(owner_address));
      transferContract.setAssetName(asset_name);
      transferContract.setAmount(amount);

      return buildTransferContract(
        transferContract,
        Transaction.Contract.ContractType.TRANSFERASSETCONTRACT,
        contract.type);
    }

    case "AccountUpdateContract": {

      let contract = new AccountUpdateContract();
      contract.setOwnerAddress(Uint8Array.from(fromHexString(value.owner_address)));
      contract.setAccountName(value.account_name);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.ACCOUNTUPDATECONTRACT,
        "AccountUpdateContract");
    }

    case "WitnessCreateContract": {

      let contract = new WitnessCreateContract();
      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setUrl(value.url);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.WITNESSCREATECONTRACT,
        "WitnessCreateContract");
    }


    case "WitnessUpdateContract": {

      let contract = new WitnessUpdateContract();
      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setUpdateUrl(value.url);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.WITNESSUPDATECONTRACT,
        "WitnessUpdateContract");
    }

    case "WithdrawBalanceContract": {

      let contract = new WithdrawBalanceContract();
      contract.setOwnerAddress(fromHexString(value.owner_address));

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.WITHDRAWBALANCECONTRACT,
        "WithdrawBalanceContract");
    }

    case "FreezeBalanceContract": {

      // TODO ADD ENERGY SWITCH

      let contract = new FreezeBalanceContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setFrozenBalance(value.frozen_balance);
      contract.setFrozenDuration(value.frozen_duration);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.FREEZEBALANCECONTRACT,
        "FreezeBalanceContract");
    }


    case "VoteWitnessContract": {

      let contract = new VoteWitnessContract();
      contract.setOwnerAddress(fromHexString(value.owner_address));

      for (let address of value.votes) {
        let vote = new VoteWitnessContract.Vote();
        vote.setVoteAddress(fromHexString(address.vote_address));
        vote.setVoteCount(address.vote_count);
        contract.addVotes(vote);
      }

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.VOTEWITNESSCONTRACT,
        "VoteWitnessContract");
    }

    case "ParticipateAssetIssueContract": {

      let contract = new ParticipateAssetIssueContract();
      contract.setToAddress(fromHexString(value.to_address));
      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setAssetName(value.asset_name);
      contract.setAmount(value.amount);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.PARTICIPATEASSETISSUECONTRACT,
        "ParticipateAssetIssueContract");
    }

    case "UnfreezeBalanceContract": {

      // TODO ADD ENERGY SWITCH

      let contract = new UnfreezeBalanceContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.UNFREEZEBALANCECONTRACT,
        "UnfreezeBalanceContract");
    }

    case "UnfreezeAssetContract": {

      let contract = new UnfreezeAssetContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.UNFREEZEASSETCONTRACT,
        "UnfreezeAssetContract");
    }

  }
}
