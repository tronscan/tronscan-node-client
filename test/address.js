const { assert } = require('chai');
const {isAddressValid} = require("../src/utils/address");

describe('address', () => {

  it('accept valid address', async () => {
    assert.isTrue(isAddressValid("A00D0CF9099287F92B98BCDF28D40684A1A70C1E83"));
    assert.isTrue(isAddressValid("A030975C3437C94118C924241ADF2A937010889B6D"));
    assert.isTrue(isAddressValid("A08B5B1D533EFA3D098D34D3CA4FD908130856DA4B"));
  });

  it('reject addresses of invalid length', async () => {
    assert.isFalse(isAddressValid("A00D0CF9099287F92B98BCDF28DA0684A11E83"));
    assert.isFalse(isAddressValid("A00D0CF9099287F92B98BCDF28DA01E83"));
    assert.isFalse(isAddressValid("A00D0CF9099287F92B98BCDF1E83"));
    assert.isFalse(isAddressValid("A00D0CF9099287F92B91E83"));
    assert.isFalse(isAddressValid("A00D0CF9099287F1E83"));
    assert.isFalse(isAddressValid("A00D0CF90991E83"));
    assert.isFalse(isAddressValid("A00D0C1E83"));
    assert.isFalse(isAddressValid(""));
  });

  it('reject invalid addresses', async () => {
    assert.isFalse(isAddressValid(""));
    assert.isFalse(isAddressValid());
    assert.isFalse(isAddressValid(null));
    assert.isFalse(isAddressValid(undefined));
    assert.isFalse(isAddressValid(false));
    assert.isFalse(isAddressValid(true));
    assert.isFalse(isAddressValid(1));
    assert.isFalse(isAddressValid(0));
  });

});
