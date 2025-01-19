const { assert } = require('chai');
const sumFunc = require('./../src/sum');

describe('sumNumbersWithSeparator test cases TDD', () => {
  
  it('should be defined', () => {
    assert.isDefined(sumFunc())
  })

  it('should return 0 for empty string', () => {
    assert.equal(sumFunc(''), 0 );
  });

  xit('should return delemete as ,', () => {
    assert.equal(sumFunc('1,2,3'), ',\n' );
  });

  xit('should return delemete if added in input number string as ;', () => {
    assert.equal(sumFunc('//;\n1;2;3'), ';' );
  });

  xit('should return number as 1;2;3', () => {
    assert.equal(sumFunc('//;\n1;2;3'), '1;2;3' );
  });

  it('should return delimeter regex with ;', () => {
    assert.equal(sumFunc('//;\n1;2;3').toString(), new RegExp(`[\\;]`).toString());
  });

  it('should return delimeter regex with ; and ,', () => {
    assert.equal(sumFunc('//;,\n1;2,3').toString(), new RegExp(`[\\;|\\,]`).toString());
  });





});