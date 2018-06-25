const buildWithdrawBalance = require("../src/utils/transactionBuilder").buildWithdrawBalance;
const buildUnfreezeBalance = require("../src/utils/transactionBuilder").buildUnfreezeBalance;
const buildFreezeBalance = require("../src/utils/transactionBuilder").buildFreezeBalance;
const byteArray2hexStr = require("../src/utils/bytes").byteArray2hexStr;
const buildVote = require("../src/utils/transactionBuilder").buildVote;
const { assert } = require('chai');

describe('transactionBuilder', () => {

  it('build voteContract', async () => {
    let transaction = buildVote("TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx", {
      "TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx": 100
    });

    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build freeze', async () => {
    let transaction = buildFreezeBalance("TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx", 100000000, 3);
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build unfreeze', async () => {
    let transaction = buildUnfreezeBalance("TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build withdraw', async () => {
    let transaction = buildWithdrawBalance("TKcrAJN3tgLshGqp7aTDTJLabdWqZSKFMx");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

});
