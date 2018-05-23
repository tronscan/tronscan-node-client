const {signTransaction} = require("../utils/crypto");


class PrivateKeySigner {
  constructor(privateKey) {
    this.privateKey = privateKey;
  }

  async signTransaction(transaction) {
    return signTransaction(this.privateKey, transaction);
  }
}

module.exports = PrivateKeySigner;
