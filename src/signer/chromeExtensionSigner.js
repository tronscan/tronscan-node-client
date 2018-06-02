const byteArray2hexStr = require("../utils/bytes").byteArray2hexStr;

const TRONSCAN_TRANSACTION = "TRONSCAN_TRANSACTION";
const TRONSCAN_TRANSACTION_RESPONSE = "TRONSCAN_TRANSACTION_RESPONSE";

class ChromeExtensionSigner {
  constructor() {
    this.callbackId = 0;
  }

  signTransaction(transaction) {

    return new Promise(resolve => {
      let callbackId = this.callbackId++;

      let responseCallback = (event) => {
        if (event.data.type && (event.data.type === TRONSCAN_TRANSACTION_RESPONSE)) {
          if (event.data.callbackId === callbackId) {
            window.removeEventListener("message", responseCallback);
            resolve({
              hex: event.data.transaction.hex,
            });
          }
        }
      };

      window.addEventListener("message", responseCallback);

      window.postMessage({
        type: TRONSCAN_TRANSACTION,
        callbackId: callbackId,
        transaction: {
          hex: byteArray2hexStr(transaction.serializeBinary()),
        },
      }, "*");
    });
  }
}

module.exports = {
  ChromeExtensionSigner,
  TRONSCAN_TRANSACTION,
  TRONSCAN_TRANSACTION_RESPONSE,
};
