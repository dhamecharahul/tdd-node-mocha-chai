const { assert } = require('chai');
const sumFunc = require('./../src/sum');

describe('sumNumbersWithSeparator test cases TDD', () => {
  
  it('should be defined', () => {
    assert.isDefined(sumFunc())
  })

  it('should return 0 for empty string', () => {
    assert.equal(sumFunc(''), 0 );
  });

});