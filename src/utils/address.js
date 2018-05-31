let isTestNet = process.env.NET === 'testnet';

const ADDRESS_SIZE = 42;
const ADDRESS_PREFIX = isTestNet ? "a0" : "41";
const ADDRESS_PREFIX_BYTE = isTestNet ? 0xa0 : 0x41;

function isAddressValid(address) {

  if (!address || address.length === 0) {
    return false;
  }

  if (address.length !== ADDRESS_SIZE) {
    return false;
  }

  if (address.substr(0, 2).toUpperCase() !== ADDRESS_PREFIX.toUpperCase()) {
    return false;
  }

  return true;
}

module.exports = {
  isAddressValid,
  ADDRESS_SIZE,
  ADDRESS_PREFIX,
  ADDRESS_PREFIX_BYTE,
};
