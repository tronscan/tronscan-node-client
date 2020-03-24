// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_api_pb = require('../api/api_pb.js');
var core_Tron_pb = require('../core/Tron_pb.js');
var core_Contract_pb = require('../core/Contract_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_protocol_Account(arg) {
  if (!(arg instanceof core_Tron_pb.Account)) {
    throw new Error('Expected argument of type protocol.Account');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Account(buffer_arg) {
  return core_Tron_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountCreateContract(arg) {
  if (!(arg instanceof core_Contract_pb.AccountCreateContract)) {
    throw new Error('Expected argument of type protocol.AccountCreateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountCreateContract(buffer_arg) {
  return core_Contract_pb.AccountCreateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountNetMessage(arg) {
  if (!(arg instanceof api_api_pb.AccountNetMessage)) {
    throw new Error('Expected argument of type protocol.AccountNetMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountNetMessage(buffer_arg) {
  return api_api_pb.AccountNetMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountPaginated(arg) {
  if (!(arg instanceof api_api_pb.AccountPaginated)) {
    throw new Error('Expected argument of type protocol.AccountPaginated');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountPaginated(buffer_arg) {
  return api_api_pb.AccountPaginated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountPermissionUpdateContract(arg) {
  if (!(arg instanceof core_Contract_pb.AccountPermissionUpdateContract)) {
    throw new Error('Expected argument of type protocol.AccountPermissionUpdateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountPermissionUpdateContract(buffer_arg) {
  return core_Contract_pb.AccountPermissionUpdateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountResourceMessage(arg) {
  if (!(arg instanceof api_api_pb.AccountResourceMessage)) {
    throw new Error('Expected argument of type protocol.AccountResourceMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountResourceMessage(buffer_arg) {
  return api_api_pb.AccountResourceMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountUpdateContract(arg) {
  if (!(arg instanceof core_Contract_pb.AccountUpdateContract)) {
    throw new Error('Expected argument of type protocol.AccountUpdateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountUpdateContract(buffer_arg) {
  return core_Contract_pb.AccountUpdateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AddressPrKeyPairMessage(arg) {
  if (!(arg instanceof api_api_pb.AddressPrKeyPairMessage)) {
    throw new Error('Expected argument of type protocol.AddressPrKeyPairMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AddressPrKeyPairMessage(buffer_arg) {
  return api_api_pb.AddressPrKeyPairMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AssetIssueContract(arg) {
  if (!(arg instanceof core_Contract_pb.AssetIssueContract)) {
    throw new Error('Expected argument of type protocol.AssetIssueContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AssetIssueContract(buffer_arg) {
  return core_Contract_pb.AssetIssueContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AssetIssueList(arg) {
  if (!(arg instanceof api_api_pb.AssetIssueList)) {
    throw new Error('Expected argument of type protocol.AssetIssueList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AssetIssueList(buffer_arg) {
  return api_api_pb.AssetIssueList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Block(arg) {
  if (!(arg instanceof core_Tron_pb.Block)) {
    throw new Error('Expected argument of type protocol.Block');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Block(buffer_arg) {
  return core_Tron_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockExtention(arg) {
  if (!(arg instanceof api_api_pb.BlockExtention)) {
    throw new Error('Expected argument of type protocol.BlockExtention');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockExtention(buffer_arg) {
  return api_api_pb.BlockExtention.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockLimit(arg) {
  if (!(arg instanceof api_api_pb.BlockLimit)) {
    throw new Error('Expected argument of type protocol.BlockLimit');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockLimit(buffer_arg) {
  return api_api_pb.BlockLimit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockList(arg) {
  if (!(arg instanceof api_api_pb.BlockList)) {
    throw new Error('Expected argument of type protocol.BlockList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockList(buffer_arg) {
  return api_api_pb.BlockList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockListExtention(arg) {
  if (!(arg instanceof api_api_pb.BlockListExtention)) {
    throw new Error('Expected argument of type protocol.BlockListExtention');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockListExtention(buffer_arg) {
  return api_api_pb.BlockListExtention.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockReference(arg) {
  if (!(arg instanceof api_api_pb.BlockReference)) {
    throw new Error('Expected argument of type protocol.BlockReference');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockReference(buffer_arg) {
  return api_api_pb.BlockReference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BuyStorageBytesContract(arg) {
  if (!(arg instanceof core_Contract_pb.BuyStorageBytesContract)) {
    throw new Error('Expected argument of type protocol.BuyStorageBytesContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BuyStorageBytesContract(buffer_arg) {
  return core_Contract_pb.BuyStorageBytesContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BuyStorageContract(arg) {
  if (!(arg instanceof core_Contract_pb.BuyStorageContract)) {
    throw new Error('Expected argument of type protocol.BuyStorageContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BuyStorageContract(buffer_arg) {
  return core_Contract_pb.BuyStorageContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BytesMessage(arg) {
  if (!(arg instanceof api_api_pb.BytesMessage)) {
    throw new Error('Expected argument of type protocol.BytesMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BytesMessage(buffer_arg) {
  return api_api_pb.BytesMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ChainParameters(arg) {
  if (!(arg instanceof core_Tron_pb.ChainParameters)) {
    throw new Error('Expected argument of type protocol.ChainParameters');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ChainParameters(buffer_arg) {
  return core_Tron_pb.ChainParameters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ClearABIContract(arg) {
  if (!(arg instanceof core_Contract_pb.ClearABIContract)) {
    throw new Error('Expected argument of type protocol.ClearABIContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ClearABIContract(buffer_arg) {
  return core_Contract_pb.ClearABIContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_CreateSmartContract(arg) {
  if (!(arg instanceof core_Contract_pb.CreateSmartContract)) {
    throw new Error('Expected argument of type protocol.CreateSmartContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_CreateSmartContract(buffer_arg) {
  return core_Contract_pb.CreateSmartContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DelegatedResourceAccountIndex(arg) {
  if (!(arg instanceof core_Tron_pb.DelegatedResourceAccountIndex)) {
    throw new Error('Expected argument of type protocol.DelegatedResourceAccountIndex');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_DelegatedResourceAccountIndex(buffer_arg) {
  return core_Tron_pb.DelegatedResourceAccountIndex.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DelegatedResourceList(arg) {
  if (!(arg instanceof api_api_pb.DelegatedResourceList)) {
    throw new Error('Expected argument of type protocol.DelegatedResourceList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_DelegatedResourceList(buffer_arg) {
  return api_api_pb.DelegatedResourceList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DelegatedResourceMessage(arg) {
  if (!(arg instanceof api_api_pb.DelegatedResourceMessage)) {
    throw new Error('Expected argument of type protocol.DelegatedResourceMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_DelegatedResourceMessage(buffer_arg) {
  return api_api_pb.DelegatedResourceMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DynamicProperties(arg) {
  if (!(arg instanceof core_Tron_pb.DynamicProperties)) {
    throw new Error('Expected argument of type protocol.DynamicProperties');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_DynamicProperties(buffer_arg) {
  return core_Tron_pb.DynamicProperties.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EasyTransferAssetByPrivateMessage(arg) {
  if (!(arg instanceof api_api_pb.EasyTransferAssetByPrivateMessage)) {
    throw new Error('Expected argument of type protocol.EasyTransferAssetByPrivateMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EasyTransferAssetByPrivateMessage(buffer_arg) {
  return api_api_pb.EasyTransferAssetByPrivateMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EasyTransferAssetMessage(arg) {
  if (!(arg instanceof api_api_pb.EasyTransferAssetMessage)) {
    throw new Error('Expected argument of type protocol.EasyTransferAssetMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EasyTransferAssetMessage(buffer_arg) {
  return api_api_pb.EasyTransferAssetMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EasyTransferByPrivateMessage(arg) {
  if (!(arg instanceof api_api_pb.EasyTransferByPrivateMessage)) {
    throw new Error('Expected argument of type protocol.EasyTransferByPrivateMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EasyTransferByPrivateMessage(buffer_arg) {
  return api_api_pb.EasyTransferByPrivateMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EasyTransferMessage(arg) {
  if (!(arg instanceof api_api_pb.EasyTransferMessage)) {
    throw new Error('Expected argument of type protocol.EasyTransferMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EasyTransferMessage(buffer_arg) {
  return api_api_pb.EasyTransferMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EasyTransferResponse(arg) {
  if (!(arg instanceof api_api_pb.EasyTransferResponse)) {
    throw new Error('Expected argument of type protocol.EasyTransferResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EasyTransferResponse(buffer_arg) {
  return api_api_pb.EasyTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EmptyMessage(arg) {
  if (!(arg instanceof api_api_pb.EmptyMessage)) {
    throw new Error('Expected argument of type protocol.EmptyMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EmptyMessage(buffer_arg) {
  return api_api_pb.EmptyMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Exchange(arg) {
  if (!(arg instanceof core_Tron_pb.Exchange)) {
    throw new Error('Expected argument of type protocol.Exchange');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Exchange(buffer_arg) {
  return core_Tron_pb.Exchange.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ExchangeCreateContract(arg) {
  if (!(arg instanceof core_Contract_pb.ExchangeCreateContract)) {
    throw new Error('Expected argument of type protocol.ExchangeCreateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ExchangeCreateContract(buffer_arg) {
  return core_Contract_pb.ExchangeCreateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ExchangeInjectContract(arg) {
  if (!(arg instanceof core_Contract_pb.ExchangeInjectContract)) {
    throw new Error('Expected argument of type protocol.ExchangeInjectContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ExchangeInjectContract(buffer_arg) {
  return core_Contract_pb.ExchangeInjectContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ExchangeList(arg) {
  if (!(arg instanceof api_api_pb.ExchangeList)) {
    throw new Error('Expected argument of type protocol.ExchangeList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ExchangeList(buffer_arg) {
  return api_api_pb.ExchangeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ExchangeTransactionContract(arg) {
  if (!(arg instanceof core_Contract_pb.ExchangeTransactionContract)) {
    throw new Error('Expected argument of type protocol.ExchangeTransactionContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ExchangeTransactionContract(buffer_arg) {
  return core_Contract_pb.ExchangeTransactionContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ExchangeWithdrawContract(arg) {
  if (!(arg instanceof core_Contract_pb.ExchangeWithdrawContract)) {
    throw new Error('Expected argument of type protocol.ExchangeWithdrawContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ExchangeWithdrawContract(buffer_arg) {
  return core_Contract_pb.ExchangeWithdrawContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_FreezeBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.FreezeBalanceContract)) {
    throw new Error('Expected argument of type protocol.FreezeBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_FreezeBalanceContract(buffer_arg) {
  return core_Contract_pb.FreezeBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_NodeInfo(arg) {
  if (!(arg instanceof core_Tron_pb.NodeInfo)) {
    throw new Error('Expected argument of type protocol.NodeInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_NodeInfo(buffer_arg) {
  return core_Tron_pb.NodeInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_NodeList(arg) {
  if (!(arg instanceof api_api_pb.NodeList)) {
    throw new Error('Expected argument of type protocol.NodeList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_NodeList(buffer_arg) {
  return api_api_pb.NodeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_NumberMessage(arg) {
  if (!(arg instanceof api_api_pb.NumberMessage)) {
    throw new Error('Expected argument of type protocol.NumberMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_NumberMessage(buffer_arg) {
  return api_api_pb.NumberMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_PaginatedMessage(arg) {
  if (!(arg instanceof api_api_pb.PaginatedMessage)) {
    throw new Error('Expected argument of type protocol.PaginatedMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_PaginatedMessage(buffer_arg) {
  return api_api_pb.PaginatedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ParticipateAssetIssueContract(arg) {
  if (!(arg instanceof core_Contract_pb.ParticipateAssetIssueContract)) {
    throw new Error('Expected argument of type protocol.ParticipateAssetIssueContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ParticipateAssetIssueContract(buffer_arg) {
  return core_Contract_pb.ParticipateAssetIssueContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Proposal(arg) {
  if (!(arg instanceof core_Tron_pb.Proposal)) {
    throw new Error('Expected argument of type protocol.Proposal');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Proposal(buffer_arg) {
  return core_Tron_pb.Proposal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ProposalApproveContract(arg) {
  if (!(arg instanceof core_Contract_pb.ProposalApproveContract)) {
    throw new Error('Expected argument of type protocol.ProposalApproveContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ProposalApproveContract(buffer_arg) {
  return core_Contract_pb.ProposalApproveContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ProposalCreateContract(arg) {
  if (!(arg instanceof core_Contract_pb.ProposalCreateContract)) {
    throw new Error('Expected argument of type protocol.ProposalCreateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ProposalCreateContract(buffer_arg) {
  return core_Contract_pb.ProposalCreateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ProposalDeleteContract(arg) {
  if (!(arg instanceof core_Contract_pb.ProposalDeleteContract)) {
    throw new Error('Expected argument of type protocol.ProposalDeleteContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ProposalDeleteContract(buffer_arg) {
  return core_Contract_pb.ProposalDeleteContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ProposalList(arg) {
  if (!(arg instanceof api_api_pb.ProposalList)) {
    throw new Error('Expected argument of type protocol.ProposalList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ProposalList(buffer_arg) {
  return api_api_pb.ProposalList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Return(arg) {
  if (!(arg instanceof api_api_pb.Return)) {
    throw new Error('Expected argument of type protocol.Return');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Return(buffer_arg) {
  return api_api_pb.Return.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SellStorageContract(arg) {
  if (!(arg instanceof core_Contract_pb.SellStorageContract)) {
    throw new Error('Expected argument of type protocol.SellStorageContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_SellStorageContract(buffer_arg) {
  return core_Contract_pb.SellStorageContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SetAccountIdContract(arg) {
  if (!(arg instanceof core_Contract_pb.SetAccountIdContract)) {
    throw new Error('Expected argument of type protocol.SetAccountIdContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_SetAccountIdContract(buffer_arg) {
  return core_Contract_pb.SetAccountIdContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SmartContract(arg) {
  if (!(arg instanceof core_Tron_pb.SmartContract)) {
    throw new Error('Expected argument of type protocol.SmartContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_SmartContract(buffer_arg) {
  return core_Tron_pb.SmartContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Transaction(arg) {
  if (!(arg instanceof core_Tron_pb.Transaction)) {
    throw new Error('Expected argument of type protocol.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Transaction(buffer_arg) {
  return core_Tron_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionApprovedList(arg) {
  if (!(arg instanceof api_api_pb.TransactionApprovedList)) {
    throw new Error('Expected argument of type protocol.TransactionApprovedList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionApprovedList(buffer_arg) {
  return api_api_pb.TransactionApprovedList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionExtention(arg) {
  if (!(arg instanceof api_api_pb.TransactionExtention)) {
    throw new Error('Expected argument of type protocol.TransactionExtention');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionExtention(buffer_arg) {
  return api_api_pb.TransactionExtention.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionInfo(arg) {
  if (!(arg instanceof core_Tron_pb.TransactionInfo)) {
    throw new Error('Expected argument of type protocol.TransactionInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionInfo(buffer_arg) {
  return core_Tron_pb.TransactionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionList(arg) {
  if (!(arg instanceof api_api_pb.TransactionList)) {
    throw new Error('Expected argument of type protocol.TransactionList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionList(buffer_arg) {
  return api_api_pb.TransactionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionListExtention(arg) {
  if (!(arg instanceof api_api_pb.TransactionListExtention)) {
    throw new Error('Expected argument of type protocol.TransactionListExtention');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionListExtention(buffer_arg) {
  return api_api_pb.TransactionListExtention.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionSign(arg) {
  if (!(arg instanceof core_Tron_pb.TransactionSign)) {
    throw new Error('Expected argument of type protocol.TransactionSign');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionSign(buffer_arg) {
  return core_Tron_pb.TransactionSign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionSignWeight(arg) {
  if (!(arg instanceof api_api_pb.TransactionSignWeight)) {
    throw new Error('Expected argument of type protocol.TransactionSignWeight');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionSignWeight(buffer_arg) {
  return api_api_pb.TransactionSignWeight.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransferAssetContract(arg) {
  if (!(arg instanceof core_Contract_pb.TransferAssetContract)) {
    throw new Error('Expected argument of type protocol.TransferAssetContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransferAssetContract(buffer_arg) {
  return core_Contract_pb.TransferAssetContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransferContract(arg) {
  if (!(arg instanceof core_Contract_pb.TransferContract)) {
    throw new Error('Expected argument of type protocol.TransferContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransferContract(buffer_arg) {
  return core_Contract_pb.TransferContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TriggerSmartContract(arg) {
  if (!(arg instanceof core_Contract_pb.TriggerSmartContract)) {
    throw new Error('Expected argument of type protocol.TriggerSmartContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TriggerSmartContract(buffer_arg) {
  return core_Contract_pb.TriggerSmartContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UnfreezeAssetContract(arg) {
  if (!(arg instanceof core_Contract_pb.UnfreezeAssetContract)) {
    throw new Error('Expected argument of type protocol.UnfreezeAssetContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UnfreezeAssetContract(buffer_arg) {
  return core_Contract_pb.UnfreezeAssetContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UnfreezeBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.UnfreezeBalanceContract)) {
    throw new Error('Expected argument of type protocol.UnfreezeBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UnfreezeBalanceContract(buffer_arg) {
  return core_Contract_pb.UnfreezeBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UpdateAssetContract(arg) {
  if (!(arg instanceof core_Contract_pb.UpdateAssetContract)) {
    throw new Error('Expected argument of type protocol.UpdateAssetContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UpdateAssetContract(buffer_arg) {
  return core_Contract_pb.UpdateAssetContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UpdateBrokerageContract(arg) {
  if (!(arg instanceof core_Contract_pb.UpdateBrokerageContract)) {
    throw new Error('Expected argument of type protocol.UpdateBrokerageContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UpdateBrokerageContract(buffer_arg) {
  return core_Contract_pb.UpdateBrokerageContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UpdateEnergyLimitContract(arg) {
  if (!(arg instanceof core_Contract_pb.UpdateEnergyLimitContract)) {
    throw new Error('Expected argument of type protocol.UpdateEnergyLimitContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UpdateEnergyLimitContract(buffer_arg) {
  return core_Contract_pb.UpdateEnergyLimitContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UpdateSettingContract(arg) {
  if (!(arg instanceof core_Contract_pb.UpdateSettingContract)) {
    throw new Error('Expected argument of type protocol.UpdateSettingContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UpdateSettingContract(buffer_arg) {
  return core_Contract_pb.UpdateSettingContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_VoteWitnessContract(arg) {
  if (!(arg instanceof core_Contract_pb.VoteWitnessContract)) {
    throw new Error('Expected argument of type protocol.VoteWitnessContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_VoteWitnessContract(buffer_arg) {
  return core_Contract_pb.VoteWitnessContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WithdrawBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.WithdrawBalanceContract)) {
    throw new Error('Expected argument of type protocol.WithdrawBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WithdrawBalanceContract(buffer_arg) {
  return core_Contract_pb.WithdrawBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessCreateContract(arg) {
  if (!(arg instanceof core_Contract_pb.WitnessCreateContract)) {
    throw new Error('Expected argument of type protocol.WitnessCreateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessCreateContract(buffer_arg) {
  return core_Contract_pb.WitnessCreateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessList(arg) {
  if (!(arg instanceof api_api_pb.WitnessList)) {
    throw new Error('Expected argument of type protocol.WitnessList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessList(buffer_arg) {
  return api_api_pb.WitnessList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessUpdateContract(arg) {
  if (!(arg instanceof core_Contract_pb.WitnessUpdateContract)) {
    throw new Error('Expected argument of type protocol.WitnessUpdateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessUpdateContract(buffer_arg) {
  return core_Contract_pb.WitnessUpdateContract.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletService = exports.WalletService = {
  getAccount: {
    path: '/protocol.Wallet/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  getAccountById: {
    path: '/protocol.Wallet/GetAccountById',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  // Please use CreateTransaction2 instead of this function.
  createTransaction: {
    path: '/protocol.Wallet/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_TransferContract,
    requestDeserialize: deserialize_protocol_TransferContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of CreateTransaction.
  createTransaction2: {
    path: '/protocol.Wallet/CreateTransaction2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TransferContract,
    requestDeserialize: deserialize_protocol_TransferContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  broadcastTransaction: {
    path: '/protocol.Wallet/BroadcastTransaction',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Transaction,
    responseType: api_api_pb.Return,
    requestSerialize: serialize_protocol_Transaction,
    requestDeserialize: deserialize_protocol_Transaction,
    responseSerialize: serialize_protocol_Return,
    responseDeserialize: deserialize_protocol_Return,
  },
  // Please use UpdateAccount2 instead of this function.
  updateAccount: {
    path: '/protocol.Wallet/UpdateAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountUpdateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_AccountUpdateContract,
    requestDeserialize: deserialize_protocol_AccountUpdateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  setAccountId: {
    path: '/protocol.Wallet/SetAccountId',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.SetAccountIdContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_SetAccountIdContract,
    requestDeserialize: deserialize_protocol_SetAccountIdContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of UpdateAccount.
  updateAccount2: {
    path: '/protocol.Wallet/UpdateAccount2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountUpdateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_AccountUpdateContract,
    requestDeserialize: deserialize_protocol_AccountUpdateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use VoteWitnessAccount2 instead of this function.
  voteWitnessAccount: {
    path: '/protocol.Wallet/VoteWitnessAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.VoteWitnessContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_VoteWitnessContract,
    requestDeserialize: deserialize_protocol_VoteWitnessContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // modify the consume_user_resource_percent
  updateSetting: {
    path: '/protocol.Wallet/UpdateSetting',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UpdateSettingContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UpdateSettingContract,
    requestDeserialize: deserialize_protocol_UpdateSettingContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // modify the energy_limit
  updateEnergyLimit: {
    path: '/protocol.Wallet/UpdateEnergyLimit',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UpdateEnergyLimitContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UpdateEnergyLimitContract,
    requestDeserialize: deserialize_protocol_UpdateEnergyLimitContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Use this function instead of VoteWitnessAccount.
  voteWitnessAccount2: {
    path: '/protocol.Wallet/VoteWitnessAccount2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.VoteWitnessContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_VoteWitnessContract,
    requestDeserialize: deserialize_protocol_VoteWitnessContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use CreateAssetIssue2 instead of this function.
  createAssetIssue: {
    path: '/protocol.Wallet/CreateAssetIssue',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AssetIssueContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_AssetIssueContract,
    requestDeserialize: deserialize_protocol_AssetIssueContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of CreateAssetIssue.
  createAssetIssue2: {
    path: '/protocol.Wallet/CreateAssetIssue2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AssetIssueContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_AssetIssueContract,
    requestDeserialize: deserialize_protocol_AssetIssueContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use UpdateWitness2 instead of this function.
  updateWitness: {
    path: '/protocol.Wallet/UpdateWitness',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessUpdateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WitnessUpdateContract,
    requestDeserialize: deserialize_protocol_WitnessUpdateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of UpdateWitness.
  updateWitness2: {
    path: '/protocol.Wallet/UpdateWitness2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessUpdateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_WitnessUpdateContract,
    requestDeserialize: deserialize_protocol_WitnessUpdateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use CreateAccount2 instead of this function.
  createAccount: {
    path: '/protocol.Wallet/CreateAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountCreateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_AccountCreateContract,
    requestDeserialize: deserialize_protocol_AccountCreateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of CreateAccount.
  createAccount2: {
    path: '/protocol.Wallet/CreateAccount2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountCreateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_AccountCreateContract,
    requestDeserialize: deserialize_protocol_AccountCreateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use CreateWitness2 instead of this function.
  createWitness: {
    path: '/protocol.Wallet/CreateWitness',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessCreateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WitnessCreateContract,
    requestDeserialize: deserialize_protocol_WitnessCreateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of CreateWitness.
  createWitness2: {
    path: '/protocol.Wallet/CreateWitness2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessCreateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_WitnessCreateContract,
    requestDeserialize: deserialize_protocol_WitnessCreateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use TransferAsset2 instead of this function.
  transferAsset: {
    path: '/protocol.Wallet/TransferAsset',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferAssetContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_TransferAssetContract,
    requestDeserialize: deserialize_protocol_TransferAssetContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of TransferAsset.
  transferAsset2: {
    path: '/protocol.Wallet/TransferAsset2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferAssetContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TransferAssetContract,
    requestDeserialize: deserialize_protocol_TransferAssetContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use ParticipateAssetIssue2 instead of this function.
  participateAssetIssue: {
    path: '/protocol.Wallet/ParticipateAssetIssue',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ParticipateAssetIssueContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_ParticipateAssetIssueContract,
    requestDeserialize: deserialize_protocol_ParticipateAssetIssueContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of ParticipateAssetIssue.
  participateAssetIssue2: {
    path: '/protocol.Wallet/ParticipateAssetIssue2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ParticipateAssetIssueContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ParticipateAssetIssueContract,
    requestDeserialize: deserialize_protocol_ParticipateAssetIssueContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use FreezeBalance2 instead of this function.
  freezeBalance: {
    path: '/protocol.Wallet/FreezeBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.FreezeBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_FreezeBalanceContract,
    requestDeserialize: deserialize_protocol_FreezeBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of FreezeBalance.
  freezeBalance2: {
    path: '/protocol.Wallet/FreezeBalance2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.FreezeBalanceContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_FreezeBalanceContract,
    requestDeserialize: deserialize_protocol_FreezeBalanceContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use UnfreezeBalance2 instead of this function.
  unfreezeBalance: {
    path: '/protocol.Wallet/UnfreezeBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UnfreezeBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_UnfreezeBalanceContract,
    requestDeserialize: deserialize_protocol_UnfreezeBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of UnfreezeBalance.
  unfreezeBalance2: {
    path: '/protocol.Wallet/UnfreezeBalance2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UnfreezeBalanceContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UnfreezeBalanceContract,
    requestDeserialize: deserialize_protocol_UnfreezeBalanceContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use UnfreezeAsset2 instead of this function.
  unfreezeAsset: {
    path: '/protocol.Wallet/UnfreezeAsset',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UnfreezeAssetContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_UnfreezeAssetContract,
    requestDeserialize: deserialize_protocol_UnfreezeAssetContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of UnfreezeAsset.
  unfreezeAsset2: {
    path: '/protocol.Wallet/UnfreezeAsset2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UnfreezeAssetContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UnfreezeAssetContract,
    requestDeserialize: deserialize_protocol_UnfreezeAssetContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use WithdrawBalance2 instead of this function.
  withdrawBalance: {
    path: '/protocol.Wallet/WithdrawBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WithdrawBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WithdrawBalanceContract,
    requestDeserialize: deserialize_protocol_WithdrawBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of WithdrawBalance.
  withdrawBalance2: {
    path: '/protocol.Wallet/WithdrawBalance2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WithdrawBalanceContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_WithdrawBalanceContract,
    requestDeserialize: deserialize_protocol_WithdrawBalanceContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Please use UpdateAsset2 instead of this function.
  updateAsset: {
    path: '/protocol.Wallet/UpdateAsset',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UpdateAssetContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_UpdateAssetContract,
    requestDeserialize: deserialize_protocol_UpdateAssetContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Use this function instead of UpdateAsset.
  updateAsset2: {
    path: '/protocol.Wallet/UpdateAsset2',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UpdateAssetContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UpdateAssetContract,
    requestDeserialize: deserialize_protocol_UpdateAssetContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  proposalCreate: {
    path: '/protocol.Wallet/ProposalCreate',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ProposalCreateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ProposalCreateContract,
    requestDeserialize: deserialize_protocol_ProposalCreateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  proposalApprove: {
    path: '/protocol.Wallet/ProposalApprove',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ProposalApproveContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ProposalApproveContract,
    requestDeserialize: deserialize_protocol_ProposalApproveContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  proposalDelete: {
    path: '/protocol.Wallet/ProposalDelete',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ProposalDeleteContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ProposalDeleteContract,
    requestDeserialize: deserialize_protocol_ProposalDeleteContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  buyStorage: {
    path: '/protocol.Wallet/BuyStorage',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.BuyStorageContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_BuyStorageContract,
    requestDeserialize: deserialize_protocol_BuyStorageContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  buyStorageBytes: {
    path: '/protocol.Wallet/BuyStorageBytes',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.BuyStorageBytesContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_BuyStorageBytesContract,
    requestDeserialize: deserialize_protocol_BuyStorageBytesContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  sellStorage: {
    path: '/protocol.Wallet/SellStorage',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.SellStorageContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_SellStorageContract,
    requestDeserialize: deserialize_protocol_SellStorageContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  exchangeCreate: {
    path: '/protocol.Wallet/ExchangeCreate',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ExchangeCreateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ExchangeCreateContract,
    requestDeserialize: deserialize_protocol_ExchangeCreateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  exchangeInject: {
    path: '/protocol.Wallet/ExchangeInject',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ExchangeInjectContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ExchangeInjectContract,
    requestDeserialize: deserialize_protocol_ExchangeInjectContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  exchangeWithdraw: {
    path: '/protocol.Wallet/ExchangeWithdraw',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ExchangeWithdrawContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ExchangeWithdrawContract,
    requestDeserialize: deserialize_protocol_ExchangeWithdrawContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  exchangeTransaction: {
    path: '/protocol.Wallet/ExchangeTransaction',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ExchangeTransactionContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ExchangeTransactionContract,
    requestDeserialize: deserialize_protocol_ExchangeTransactionContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  listNodes: {
    path: '/protocol.Wallet/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NodeList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NodeList,
    responseDeserialize: deserialize_protocol_NodeList,
  },
  getAssetIssueByAccount: {
    path: '/protocol.Wallet/GetAssetIssueByAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAccountNet: {
    path: '/protocol.Wallet/GetAccountNet',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.AccountNetMessage,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_AccountNetMessage,
    responseDeserialize: deserialize_protocol_AccountNetMessage,
  },
  getAccountResource: {
    path: '/protocol.Wallet/GetAccountResource',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.AccountResourceMessage,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_AccountResourceMessage,
    responseDeserialize: deserialize_protocol_AccountResourceMessage,
  },
  getAssetIssueByName: {
    path: '/protocol.Wallet/GetAssetIssueByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  getAssetIssueListByName: {
    path: '/protocol.Wallet/GetAssetIssueListByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueById: {
    path: '/protocol.Wallet/GetAssetIssueById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  // Please use GetNowBlock2 instead of this function.
  getNowBlock: {
    path: '/protocol.Wallet/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // Use this function instead of GetNowBlock.
  getNowBlock2: {
    path: '/protocol.Wallet/GetNowBlock2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.BlockExtention,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_BlockExtention,
    responseDeserialize: deserialize_protocol_BlockExtention,
  },
  // Please use GetBlockByNum2 instead of this function.
  getBlockByNum: {
    path: '/protocol.Wallet/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // Use this function instead of GetBlockByNum.
  getBlockByNum2: {
    path: '/protocol.Wallet/GetBlockByNum2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.BlockExtention,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_BlockExtention,
    responseDeserialize: deserialize_protocol_BlockExtention,
  },
  getTransactionCountByBlockNum: {
    path: '/protocol.Wallet/GetTransactionCountByBlockNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getBlockById: {
    path: '/protocol.Wallet/GetBlockById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // Please use GetBlockByLimitNext2 instead of this function.
  getBlockByLimitNext: {
    path: '/protocol.Wallet/GetBlockByLimitNext',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BlockLimit,
    responseType: api_api_pb.BlockList,
    requestSerialize: serialize_protocol_BlockLimit,
    requestDeserialize: deserialize_protocol_BlockLimit,
    responseSerialize: serialize_protocol_BlockList,
    responseDeserialize: deserialize_protocol_BlockList,
  },
  // Use this function instead of GetBlockByLimitNext.
  getBlockByLimitNext2: {
    path: '/protocol.Wallet/GetBlockByLimitNext2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BlockLimit,
    responseType: api_api_pb.BlockListExtention,
    requestSerialize: serialize_protocol_BlockLimit,
    requestDeserialize: deserialize_protocol_BlockLimit,
    responseSerialize: serialize_protocol_BlockListExtention,
    responseDeserialize: deserialize_protocol_BlockListExtention,
  },
  // Please use GetBlockByLatestNum2 instead of this function.
  getBlockByLatestNum: {
    path: '/protocol.Wallet/GetBlockByLatestNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.BlockList,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_BlockList,
    responseDeserialize: deserialize_protocol_BlockList,
  },
  // Use this function instead of GetBlockByLatestNum.
  getBlockByLatestNum2: {
    path: '/protocol.Wallet/GetBlockByLatestNum2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.BlockListExtention,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_BlockListExtention,
    responseDeserialize: deserialize_protocol_BlockListExtention,
  },
  getTransactionById: {
    path: '/protocol.Wallet/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  deployContract: {
    path: '/protocol.Wallet/DeployContract',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.CreateSmartContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_CreateSmartContract,
    requestDeserialize: deserialize_protocol_CreateSmartContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  getContract: {
    path: '/protocol.Wallet/GetContract',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.SmartContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_SmartContract,
    responseDeserialize: deserialize_protocol_SmartContract,
  },
  triggerContract: {
    path: '/protocol.Wallet/TriggerContract',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TriggerSmartContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TriggerSmartContract,
    requestDeserialize: deserialize_protocol_TriggerSmartContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  triggerConstantContract: {
    path: '/protocol.Wallet/TriggerConstantContract',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TriggerSmartContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TriggerSmartContract,
    requestDeserialize: deserialize_protocol_TriggerSmartContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  clearContractABI: {
    path: '/protocol.Wallet/ClearContractABI',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ClearABIContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_ClearABIContract,
    requestDeserialize: deserialize_protocol_ClearABIContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  listWitnesses: {
    path: '/protocol.Wallet/ListWitnesses',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.WitnessList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_WitnessList,
    responseDeserialize: deserialize_protocol_WitnessList,
  },
  getDelegatedResource: {
    path: '/protocol.Wallet/GetDelegatedResource',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.DelegatedResourceMessage,
    responseType: api_api_pb.DelegatedResourceList,
    requestSerialize: serialize_protocol_DelegatedResourceMessage,
    requestDeserialize: deserialize_protocol_DelegatedResourceMessage,
    responseSerialize: serialize_protocol_DelegatedResourceList,
    responseDeserialize: deserialize_protocol_DelegatedResourceList,
  },
  getDelegatedResourceAccountIndex: {
    path: '/protocol.Wallet/GetDelegatedResourceAccountIndex',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.DelegatedResourceAccountIndex,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_DelegatedResourceAccountIndex,
    responseDeserialize: deserialize_protocol_DelegatedResourceAccountIndex,
  },
  listProposals: {
    path: '/protocol.Wallet/ListProposals',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.ProposalList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_ProposalList,
    responseDeserialize: deserialize_protocol_ProposalList,
  },
  getPaginatedProposalList: {
    path: '/protocol.Wallet/GetPaginatedProposalList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PaginatedMessage,
    responseType: api_api_pb.ProposalList,
    requestSerialize: serialize_protocol_PaginatedMessage,
    requestDeserialize: deserialize_protocol_PaginatedMessage,
    responseSerialize: serialize_protocol_ProposalList,
    responseDeserialize: deserialize_protocol_ProposalList,
  },
  getProposalById: {
    path: '/protocol.Wallet/GetProposalById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Proposal,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Proposal,
    responseDeserialize: deserialize_protocol_Proposal,
  },
  listExchanges: {
    path: '/protocol.Wallet/ListExchanges',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.ExchangeList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_ExchangeList,
    responseDeserialize: deserialize_protocol_ExchangeList,
  },
  getPaginatedExchangeList: {
    path: '/protocol.Wallet/GetPaginatedExchangeList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PaginatedMessage,
    responseType: api_api_pb.ExchangeList,
    requestSerialize: serialize_protocol_PaginatedMessage,
    requestDeserialize: deserialize_protocol_PaginatedMessage,
    responseSerialize: serialize_protocol_ExchangeList,
    responseDeserialize: deserialize_protocol_ExchangeList,
  },
  getExchangeById: {
    path: '/protocol.Wallet/GetExchangeById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Exchange,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Exchange,
    responseDeserialize: deserialize_protocol_Exchange,
  },
  getChainParameters: {
    path: '/protocol.Wallet/GetChainParameters',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.ChainParameters,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_ChainParameters,
    responseDeserialize: deserialize_protocol_ChainParameters,
  },
  getAssetIssueList: {
    path: '/protocol.Wallet/GetAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getPaginatedAssetIssueList: {
    path: '/protocol.Wallet/GetPaginatedAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PaginatedMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_PaginatedMessage,
    requestDeserialize: deserialize_protocol_PaginatedMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  totalTransaction: {
    path: '/protocol.Wallet/TotalTransaction',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getNextMaintenanceTime: {
    path: '/protocol.Wallet/GetNextMaintenanceTime',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  // Warning: do not invoke this interface provided by others.
  // Please use GetTransactionSign2 instead of this function.
  getTransactionSign: {
    path: '/protocol.Wallet/GetTransactionSign',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.TransactionSign,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_TransactionSign,
    requestDeserialize: deserialize_protocol_TransactionSign,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  // Warning: do not invoke this interface provided by others.
  // Use this function instead of GetTransactionSign.
  getTransactionSign2: {
    path: '/protocol.Wallet/GetTransactionSign2',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.TransactionSign,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TransactionSign,
    requestDeserialize: deserialize_protocol_TransactionSign,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  // Warning: do not invoke this interface provided by others.
  createAddress: {
    path: '/protocol.Wallet/CreateAddress',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.BytesMessage,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_BytesMessage,
    responseDeserialize: deserialize_protocol_BytesMessage,
  },
  // Warning: do not invoke this interface provided by others.
  easyTransferAsset: {
    path: '/protocol.Wallet/EasyTransferAsset',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EasyTransferAssetMessage,
    responseType: api_api_pb.EasyTransferResponse,
    requestSerialize: serialize_protocol_EasyTransferAssetMessage,
    requestDeserialize: deserialize_protocol_EasyTransferAssetMessage,
    responseSerialize: serialize_protocol_EasyTransferResponse,
    responseDeserialize: deserialize_protocol_EasyTransferResponse,
  },
  // Warning: do not invoke this interface provided by others.
  easyTransferAssetByPrivate: {
    path: '/protocol.Wallet/EasyTransferAssetByPrivate',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EasyTransferAssetByPrivateMessage,
    responseType: api_api_pb.EasyTransferResponse,
    requestSerialize: serialize_protocol_EasyTransferAssetByPrivateMessage,
    requestDeserialize: deserialize_protocol_EasyTransferAssetByPrivateMessage,
    responseSerialize: serialize_protocol_EasyTransferResponse,
    responseDeserialize: deserialize_protocol_EasyTransferResponse,
  },
  // Warning: do not invoke this interface provided by others.
  easyTransfer: {
    path: '/protocol.Wallet/EasyTransfer',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EasyTransferMessage,
    responseType: api_api_pb.EasyTransferResponse,
    requestSerialize: serialize_protocol_EasyTransferMessage,
    requestDeserialize: deserialize_protocol_EasyTransferMessage,
    responseSerialize: serialize_protocol_EasyTransferResponse,
    responseDeserialize: deserialize_protocol_EasyTransferResponse,
  },
  // Warning: do not invoke this interface provided by others.
  easyTransferByPrivate: {
    path: '/protocol.Wallet/EasyTransferByPrivate',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EasyTransferByPrivateMessage,
    responseType: api_api_pb.EasyTransferResponse,
    requestSerialize: serialize_protocol_EasyTransferByPrivateMessage,
    requestDeserialize: deserialize_protocol_EasyTransferByPrivateMessage,
    responseSerialize: serialize_protocol_EasyTransferResponse,
    responseDeserialize: deserialize_protocol_EasyTransferResponse,
  },
  // Warning: do not invoke this interface provided by others.
  generateAddress: {
    path: '/protocol.Wallet/GenerateAddress',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AddressPrKeyPairMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AddressPrKeyPairMessage,
    responseDeserialize: deserialize_protocol_AddressPrKeyPairMessage,
  },
  getTransactionInfoById: {
    path: '/protocol.Wallet/GetTransactionInfoById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.TransactionInfo,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_TransactionInfo,
    responseDeserialize: deserialize_protocol_TransactionInfo,
  },
  accountPermissionUpdate: {
    path: '/protocol.Wallet/AccountPermissionUpdate',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountPermissionUpdateContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_AccountPermissionUpdateContract,
    requestDeserialize: deserialize_protocol_AccountPermissionUpdateContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  addSign: {
    path: '/protocol.Wallet/AddSign',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.TransactionSign,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TransactionSign,
    requestDeserialize: deserialize_protocol_TransactionSign,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  getTransactionSignWeight: {
    path: '/protocol.Wallet/GetTransactionSignWeight',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Transaction,
    responseType: api_api_pb.TransactionSignWeight,
    requestSerialize: serialize_protocol_Transaction,
    requestDeserialize: deserialize_protocol_Transaction,
    responseSerialize: serialize_protocol_TransactionSignWeight,
    responseDeserialize: deserialize_protocol_TransactionSignWeight,
  },
  getTransactionApprovedList: {
    path: '/protocol.Wallet/GetTransactionApprovedList',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Transaction,
    responseType: api_api_pb.TransactionApprovedList,
    requestSerialize: serialize_protocol_Transaction,
    requestDeserialize: deserialize_protocol_Transaction,
    responseSerialize: serialize_protocol_TransactionApprovedList,
    responseDeserialize: deserialize_protocol_TransactionApprovedList,
  },
  getNodeInfo: {
    path: '/protocol.Wallet/GetNodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.NodeInfo,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NodeInfo,
    responseDeserialize: deserialize_protocol_NodeInfo,
  },
  getRewardInfo: {
    path: '/protocol.Wallet/GetRewardInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getBrokerageInfo: {
    path: '/protocol.Wallet/GetBrokerageInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  updateBrokerage: {
    path: '/protocol.Wallet/UpdateBrokerage',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UpdateBrokerageContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_UpdateBrokerageContract,
    requestDeserialize: deserialize_protocol_UpdateBrokerageContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
};

exports.WalletClient = grpc.makeGenericClientConstructor(WalletService);
var WalletSolidityService = exports.WalletSolidityService = {
  getAccount: {
    path: '/protocol.WalletSolidity/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  getAccountById: {
    path: '/protocol.WalletSolidity/GetAccountById',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  listWitnesses: {
    path: '/protocol.WalletSolidity/ListWitnesses',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.WitnessList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_WitnessList,
    responseDeserialize: deserialize_protocol_WitnessList,
  },
  getAssetIssueList: {
    path: '/protocol.WalletSolidity/GetAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getPaginatedAssetIssueList: {
    path: '/protocol.WalletSolidity/GetPaginatedAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.PaginatedMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_PaginatedMessage,
    requestDeserialize: deserialize_protocol_PaginatedMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueByName: {
    path: '/protocol.WalletSolidity/GetAssetIssueByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  getAssetIssueListByName: {
    path: '/protocol.WalletSolidity/GetAssetIssueListByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueById: {
    path: '/protocol.WalletSolidity/GetAssetIssueById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  // Please use GetNowBlock2 instead of this function.
  getNowBlock: {
    path: '/protocol.WalletSolidity/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // Use this function instead of GetNowBlock.
  getNowBlock2: {
    path: '/protocol.WalletSolidity/GetNowBlock2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.BlockExtention,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_BlockExtention,
    responseDeserialize: deserialize_protocol_BlockExtention,
  },
  // Please use GetBlockByNum2 instead of this function.
  getBlockByNum: {
    path: '/protocol.WalletSolidity/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // Use this function instead of GetBlockByNum.
  getBlockByNum2: {
    path: '/protocol.WalletSolidity/GetBlockByNum2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.BlockExtention,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_BlockExtention,
    responseDeserialize: deserialize_protocol_BlockExtention,
  },
  getTransactionCountByBlockNum: {
    path: '/protocol.WalletSolidity/GetTransactionCountByBlockNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getDelegatedResource: {
    path: '/protocol.WalletSolidity/GetDelegatedResource',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.DelegatedResourceMessage,
    responseType: api_api_pb.DelegatedResourceList,
    requestSerialize: serialize_protocol_DelegatedResourceMessage,
    requestDeserialize: deserialize_protocol_DelegatedResourceMessage,
    responseSerialize: serialize_protocol_DelegatedResourceList,
    responseDeserialize: deserialize_protocol_DelegatedResourceList,
  },
  getDelegatedResourceAccountIndex: {
    path: '/protocol.WalletSolidity/GetDelegatedResourceAccountIndex',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.DelegatedResourceAccountIndex,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_DelegatedResourceAccountIndex,
    responseDeserialize: deserialize_protocol_DelegatedResourceAccountIndex,
  },
  getExchangeById: {
    path: '/protocol.WalletSolidity/GetExchangeById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Exchange,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Exchange,
    responseDeserialize: deserialize_protocol_Exchange,
  },
  listExchanges: {
    path: '/protocol.WalletSolidity/ListExchanges',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.ExchangeList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_ExchangeList,
    responseDeserialize: deserialize_protocol_ExchangeList,
  },
  getTransactionById: {
    path: '/protocol.WalletSolidity/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  getTransactionInfoById: {
    path: '/protocol.WalletSolidity/GetTransactionInfoById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.TransactionInfo,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_TransactionInfo,
    responseDeserialize: deserialize_protocol_TransactionInfo,
  },
  // Warning: do not invoke this interface provided by others.
  generateAddress: {
    path: '/protocol.WalletSolidity/GenerateAddress',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AddressPrKeyPairMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AddressPrKeyPairMessage,
    responseDeserialize: deserialize_protocol_AddressPrKeyPairMessage,
  },
  triggerConstantContract: {
    path: '/protocol.WalletSolidity/TriggerConstantContract',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TriggerSmartContract,
    responseType: api_api_pb.TransactionExtention,
    requestSerialize: serialize_protocol_TriggerSmartContract,
    requestDeserialize: deserialize_protocol_TriggerSmartContract,
    responseSerialize: serialize_protocol_TransactionExtention,
    responseDeserialize: deserialize_protocol_TransactionExtention,
  },
  getRewardInfo: {
    path: '/protocol.WalletSolidity/GetRewardInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getBrokerageInfo: {
    path: '/protocol.WalletSolidity/GetBrokerageInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
};

exports.WalletSolidityClient = grpc.makeGenericClientConstructor(WalletSolidityService);
var WalletExtensionService = exports.WalletExtensionService = {
  // Please use GetTransactionsFromThis2 instead of this function.
  getTransactionsFromThis: {
    path: '/protocol.WalletExtension/GetTransactionsFromThis',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.AccountPaginated,
    responseType: api_api_pb.TransactionList,
    requestSerialize: serialize_protocol_AccountPaginated,
    requestDeserialize: deserialize_protocol_AccountPaginated,
    responseSerialize: serialize_protocol_TransactionList,
    responseDeserialize: deserialize_protocol_TransactionList,
  },
  // Use this function instead of GetTransactionsFromThis.
  getTransactionsFromThis2: {
    path: '/protocol.WalletExtension/GetTransactionsFromThis2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.AccountPaginated,
    responseType: api_api_pb.TransactionListExtention,
    requestSerialize: serialize_protocol_AccountPaginated,
    requestDeserialize: deserialize_protocol_AccountPaginated,
    responseSerialize: serialize_protocol_TransactionListExtention,
    responseDeserialize: deserialize_protocol_TransactionListExtention,
  },
  // Please use GetTransactionsToThis2 instead of this function.
  getTransactionsToThis: {
    path: '/protocol.WalletExtension/GetTransactionsToThis',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.AccountPaginated,
    responseType: api_api_pb.TransactionList,
    requestSerialize: serialize_protocol_AccountPaginated,
    requestDeserialize: deserialize_protocol_AccountPaginated,
    responseSerialize: serialize_protocol_TransactionList,
    responseDeserialize: deserialize_protocol_TransactionList,
  },
  // Use this function instead of GetTransactionsToThis.
  getTransactionsToThis2: {
    path: '/protocol.WalletExtension/GetTransactionsToThis2',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.AccountPaginated,
    responseType: api_api_pb.TransactionListExtention,
    requestSerialize: serialize_protocol_AccountPaginated,
    requestDeserialize: deserialize_protocol_AccountPaginated,
    responseSerialize: serialize_protocol_TransactionListExtention,
    responseDeserialize: deserialize_protocol_TransactionListExtention,
  },
};

exports.WalletExtensionClient = grpc.makeGenericClientConstructor(WalletExtensionService);
// the api of tron's db
var DatabaseService = exports.DatabaseService = {
  // for tapos
  getBlockReference: {
    path: '/protocol.Database/getBlockReference',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.BlockReference,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_BlockReference,
    responseDeserialize: deserialize_protocol_BlockReference,
  },
  getDynamicProperties: {
    path: '/protocol.Database/GetDynamicProperties',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.DynamicProperties,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_DynamicProperties,
    responseDeserialize: deserialize_protocol_DynamicProperties,
  },
  getNowBlock: {
    path: '/protocol.Database/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  getBlockByNum: {
    path: '/protocol.Database/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
};

exports.DatabaseClient = grpc.makeGenericClientConstructor(DatabaseService);
// the api of tron's network such as node list.
var NetworkService = exports.NetworkService = {
};

exports.NetworkClient = grpc.makeGenericClientConstructor(NetworkService);
