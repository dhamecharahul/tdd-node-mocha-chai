const { assert } = require('chai');
const sumFunc = require('./../src/sum');

describe('sumNumbersWithSeparator test cases TDD', () => {
  
  it('should be defined', () => {
    assert.isDefined(sumFunc())
  })

  it('should return 0 for empty string', () => {
    assert.equal(sumFunc(''), 0 );
  });

  it('should throw error for negative numbers', () => {
    assert.throws(() => sumFunc('1,-2,3'), Error, "Negatives numbers not allowed: -2");
  });

  it('should throw error for multiple negative numbers', () => {
    assert.throws(() => sumFunc('1,-2,-3'), Error, "Negatives numbers not allowed: -2, -3");
  });

  it('should return the number itself', () => {
    assert.equal(sumFunc('1'), 1 );
  });

  it('should sum numbers separated by comma', () => {
    assert.equal(sumFunc('1,2,3'), 6 );
  });

  it('should sum numbers separated by newline', () => {
    assert.equal(sumFunc('1\n2\n3'), 6 );
  });

  it('should sum numbers separated by comma and newline', () => {
    assert.equal(sumFunc('1,2\n3'), 6 );
  });

  it('should support custom delimiters ;', () => {
    assert.equal(sumFunc('//;\n1;2;3'), 6 );
  });

  it('should support custom delimiters ; & ,', () => {
    assert.equal(sumFunc('//;,\n1;2,3'), 6 );
  });

  it('should support custom delimiter with special characters', () => {
    assert.equal(sumFunc('//$\n1$2$3'), 6 );
  });

  it('should sum large number like 900009', () => {
    assert.equal(sumFunc('1,900009,2'), 900012);
  });

});