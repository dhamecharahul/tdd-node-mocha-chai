const { assert } = require('chai');
const sumFunc = require('./../src/sum');

describe('sumNumbersWithSeparator test cases TDD', () => {
  
  it('should be defined', () => {
    assert.isDefined(sumFunc())
  })

});