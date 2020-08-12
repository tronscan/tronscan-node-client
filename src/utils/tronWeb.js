const { buildTransferContract } = require("./transactionBuilder");
const { Block, Transaction, Account } = require("../protocol/core/Tron_pb");

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
  TriggerSmartContract,
  ExchangeTransactionContract,
  ExchangeCreateContract,
  ExchangeWithdrawContract,
  ExchangeInjectContract,
  AccountPermissionUpdateContract,
} = require("../protocol/core/Contract_pb");

const fromHexString = hexString =>
  new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

export function transactionJsonToProtoBuf(transaction) {
  const rawData = transaction["raw_data"];
  const contractJson = rawData.contract[0];
  const transactionObj = contractJsonToProtobuf(contractJson);
  // if(contractJson.Permission_id){
  //   transactionObj.setPermissionId(contractJson.Permission_id);
  // }
  const rawDataObj = transactionObj.getRawData();
  rawDataObj.setRefBlockBytes(fromHexString(rawData.ref_block_bytes));
  rawDataObj.setRefBlockHash(fromHexString(rawData.ref_block_hash));
  if (rawData.expiration) {
    rawDataObj.setExpiration(rawData.expiration);
  }
  if (rawData.data) {
    rawDataObj.setData(fromHexString(rawData.data));
  }
  if (rawData.timestamp) {
    rawDataObj.setTimestamp(rawData.timestamp);
  }
  if (rawData.fee_limit) {
    rawDataObj.setFeeLimit(rawData.fee_limit);
  }
  // contractObj.setPermission
  transactionObj.setRawData(rawDataObj);
  return transactionObj;
}

export function contractJsonToProtobuf(contract) {
  const value = contract.parameter.value;
  switch (contract.type) {

    case "TransferContract": {
      const { to_address, owner_address, amount } = value;
      let transferContract = new TransferContract();
      transferContract.setToAddress(fromHexString(to_address));
      transferContract.setOwnerAddress(fromHexString(owner_address));
      transferContract.setAmount(amount);
      return buildTransferContract(
        transferContract,
        Transaction.Contract.ContractType.TRANSFERCONTRACT,
        "TransferContract",contract.Permission_id);
    }

    case "TransferAssetContract": {
      const { to_address, owner_address, amount, asset_name } = value;
      let transferContract = new TransferAssetContract();
      transferContract.setToAddress(fromHexString(to_address));
      transferContract.setOwnerAddress(fromHexString(owner_address));
      transferContract.setAssetName(fromHexString(asset_name));
      transferContract.setAmount(amount);
      return buildTransferContract(
        transferContract,
        Transaction.Contract.ContractType.TRANSFERASSETCONTRACT,
        "TransferAssetContract",contract.Permission_id);
    }

    case "AccountUpdateContract": {
      const { owner_address, account_name } = value;
      let contract = new AccountUpdateContract();
      contract.setOwnerAddress(fromHexString(owner_address));
      contract.setAccountName(fromHexString(account_name));

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
      if (value.resource === 'ENERGY') {
        contract.setResource(1);
      }
      else {
        contract.setResource(0);
      }


      if (value.receiver_address) {
        contract.setReceiverAddress(fromHexString(value.receiver_address));
      }

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
      contract.setAssetName(fromHexString(value.asset_name));
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
      if (value.resource === 'ENERGY') {
        contract.setResource(1);
      }
      else {
        contract.setResource(0);
      }

      if (value.receiver_address) {
        contract.setReceiverAddress(fromHexString(value.receiver_address));
      }
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

    case "TriggerSmartContract": {
      let triggerSmartContract = new TriggerSmartContract();
      triggerSmartContract.setOwnerAddress(fromHexString(value.owner_address));
      triggerSmartContract.setContractAddress(fromHexString(value.contract_address));
      triggerSmartContract.setCallValue(value.call_value);
      triggerSmartContract.setData(fromHexString(value.data));

      return buildTransferContract(
        triggerSmartContract,
        Transaction.Contract.ContractType.TRIGGERSMARTCONTRACT,
        "TriggerSmartContract",contract.Permission_id);
    }

    case "ExchangeTransactionContract": {
      let contract = new ExchangeTransactionContract();
      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setExchangeId(value.exchange_id);
      contract.setTokenId(fromHexString(value.token_id));
      contract.setQuant(value.quant);
      contract.setExpected(value.expected);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.EXCHANGETRANSACTIONCONTRACT,
        "ExchangeTransactionContract");
    }

    case "ExchangeCreateContract": {

      let contract = new ExchangeCreateContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setFirstTokenId(fromHexString(value.first_token_id));
      contract.setFirstTokenBalance(value.first_token_balance);
      contract.setSecondTokenId(fromHexString(value.second_token_id));
      contract.setSecondTokenBalance(value.second_token_balance);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.EXCHANGECREATECONTRACT,
        "ExchangeCreateContract");
    }

    case "ExchangeInjectContract": {

      let contract = new ExchangeInjectContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setExchangeId(value.exchange_id);
      contract.setTokenId(fromHexString(value.token_id));
      contract.setQuant(value.quant);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.EXCHANGEINJECTCONTRACT,
        "ExchangeInjectContract");
    }

    case "ExchangeWithdrawContract": {

      let contract = new ExchangeWithdrawContract();

      contract.setOwnerAddress(fromHexString(value.owner_address));
      contract.setExchangeId(value.exchange_id);
      contract.setTokenId(fromHexString(value.token_id));
      contract.setQuant(value.quant);

      return buildTransferContract(
        contract,
        Transaction.Contract.ContractType.EXCHANGEWITHDRAWCONTRACT,
        "ExchangeWithdrawContract");
    }
  
    case "AccountPermissionUpdateContract":{
      let accountPermissionUpdateContract = new AccountPermissionUpdateContract();
      const { owner, actives, witness, owner_address } = value;
      //set ownerAddress
      accountPermissionUpdateContract.setOwnerAddress(fromHexString(owner_address));
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
          accountPermissionUpdateContract.setOwner(ownerPermission);
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
              accountPermissionUpdateContract.setWitness(witnessPermission);
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
            accountPermissionUpdateContract.addActives(activePermission);
          })
      }
      return buildTransferContract(
          accountPermissionUpdateContract,
          Transaction.Contract.ContractType.ACCOUNTPERMISSIONUPDATECONTRACT,
          "AccountPermissionUpdateContract",contract.Permission_id);
      }

  }
}
