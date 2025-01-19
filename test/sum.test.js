const { assert } = require('chai');
const sumFunc = require('./../src/sum');

describe('sumNumbersWithSeparator test cases TDD', () => {
  
  it('should be defined', () => {
    assert.isDefined(sumFunc())
  })

  it('should return 0 for empty string', () => {
    assert.equal(sumFunc(''), 0 );
  });

  it('should return delemete as ,', () => {
    assert.equal(sumFunc('1,2,3'), ',\n' );
  });

  it('should return delemete if added in input number string as ;', () => {
    assert.equal(sumFunc('//;\n1;2;3'), ';' );
  });



});