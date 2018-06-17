const {Transaction} = require("../protocol/core/Tron_pb");
const Contract = require("../protocol/core/Contract_pb");
const {Any} = require('google-protobuf/google/protobuf/any_pb.js');

const contractTypeMap = {
  [Transaction.Contract.ContractType.ACCOUNTCREATECONTRACT]: "AccountCreateContract",
  [Transaction.Contract.ContractType.TRANSFERCONTRACT]: "TransferContract",
  [Transaction.Contract.ContractType.TRANSFERASSETCONTRACT]: "TransferAssetContract",
  [Transaction.Contract.ContractType.VOTEASSETCONTRACT]: "VoteAssetContract",
  [Transaction.Contract.ContractType.VOTEWITNESSCONTRACT]: "VoteWitnessContract",
  [Transaction.Contract.ContractType.WITNESSCREATECONTRACT]: "WitnessCreateContract",
  [Transaction.Contract.ContractType.ASSETISSUECONTRACT]: "AssetIssueContract",
  [Transaction.Contract.ContractType.DEPLOYCONTRACT]: "DeployContract",
  [Transaction.Contract.ContractType.WITNESSUPDATECONTRACT]: "WitnessUpdateContract",
  [Transaction.Contract.ContractType.PARTICIPATEASSETISSUECONTRACT]: "ParticipateAssetIssueContract",
  [Transaction.Contract.ContractType.ACCOUNTUPDATECONTRACT]: "AccountUpdateContract",
  [Transaction.Contract.ContractType.FREEZEBALANCECONTRACT]: "FreezeBalanceContract",
  [Transaction.Contract.ContractType.UNFREEZEBALANCECONTRACT]: "UnfreezeBalanceContract",
  [Transaction.Contract.ContractType.WITHDRAWBALANCECONTRACT]: "WithdrawnBalanceContract",
  [Transaction.Contract.ContractType.UNFREEZEASSETCONTRACT]: "UnfreezeAssetContract",
  [Transaction.Contract.ContractType.UPDATEASSETCONTRACT]: "UpdateAssetContract",
  [Transaction.Contract.ContractType.CUSTOMCONTRACT]: "CustomContract",
};

function anyToContract(any, contractType) {
  let contract = contractTypeMap[contractType];
  return {
    contract: any.unpack(Contract[contract].deserializeBinary, "protocol." + contract),
    type: contractType,
  };
}


function getContractListFromTransaction(transaction) {
  var raw = transaction.getRawData();
  var contractList = raw.getContractList();

  return contractList.map(contract => {
    var any = contract.getParameter();
    var contractType = contract.getType();
    return anyToContract(any, contractType);
  });
}

module.exports = {
  anyToContract,
  getContractListFromTransaction,
};
