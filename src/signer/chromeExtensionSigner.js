const byteArray2hexStr = require("../utils/bytes").byteArray2hexStr;

const TRONSCAN_TRANSACTION = "TRONSCAN_TRANSACTION";
const TRONSCAN_TRANSACTION_RESPONSE = "TRONSCAN_TRANSACTION_RESPONSE";
const TRONSCAN_PING = "TRONSCAN_PING";
const TRONSCAN_PONG = "TRONSCAN_PONG";
const TRONSCAN_REQUEST_ACCOUNT = "TRONSCAN_REQUEST_ACCOUNT";

class ChromeExtensionSigner {

  constructor() {
    this.callbackId = 0;
  }

  async isExtensionAvailable() {
    let check = await this.sendMessage({
      type: TRONSCAN_PING,
    });

    return check.type === TRONSCAN_PONG;
  }

  async getAccount() {
    let {account} = await this.sendMessage({
      type: TRONSCAN_REQUEST_ACCOUNT,
    });

    return account;
  }

  /**
   * Send a message to the chrome extension
   *
   * @param data
   * @returns {Promise<object>}
   */
  sendMessage(data) {
    return new Promise(resolve => {
      let callbackId = this.callbackId++;

      let responseCallback = (event) => {
        console.log("CLIENT RESPONSE", event);
        if ((event.data._fromClient !== true) && (event.data.callbackId === callbackId)) {
          window.removeEventListener("message", responseCallback);
          console.log("RESPONSE", event.data, event);
          resolve(event.data);
        }
      };

      window.addEventListener("message", responseCallback);

      window.postMessage(Object.assign({
        callbackId: callbackId,
        _fromClient: true,
      }, data), "*");
    });
  }

  /**
   * Signs the given transaction object
   *
   * @param transactionObj Transaction
   * @returns {Promise<Object.transaction>}
   */
  async signTransaction(transactionObj) {

    let {transaction, rejected} = await this.sendMessage({
      type: TRONSCAN_TRANSACTION,
      transaction: {
        hex: byteArray2hexStr(transactionObj.serializeBinary()),
      }
    });

    if (rejected === true) {
      throw new Error("Rejected transaction");
    }

    return transaction;
  }
}

module.exports = {
  ChromeExtensionSigner,
};
