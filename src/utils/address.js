const ADDRESS_PREFIX = "a0";
const ADDRESS_SIZE = 42;


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
};
