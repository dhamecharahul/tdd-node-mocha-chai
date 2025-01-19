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

  xit('should return delimeter regex with ;', () => {
    assert.equal(sumFunc('//;\n1;2;3').toString(), new RegExp(`[\\;]`).toString());
  });

  xit('should return delimeter regex with ; and ,', () => {
    assert.equal(sumFunc('//;,\n1;2,3').toString(), new RegExp(`[\\;|\\,]`).toString());
  });

  xit('should return number array with regex of ;', () => {
    assert.equal(sumFunc('//;\n1;2;3').toString(), ['1','2','3'].toString());
  });

  xit('should return number array with regex of ;', () => {
    assert.equal(sumFunc('//;,\n1;2,3').toString(), ['1','2','3'].toString());
  });

  xit('should convert the string into number and return numbers instead for char', () => {
    assert.equal(sumFunc('//;\n1;2;3').toString(), [1,2,3].toString());
  });


  xit('should convert check chars and if NAN is found return 0', () => {
    assert.equal(sumFunc('//;\n@;2;3').toString(), [0,2,3].toString());
  });

  xit('should get nagative number if exist and store it', () => {
    assert.equal(sumFunc('//;\n-1;2;3').toString(), [-1].toString());
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
    assert.equal(add('1\n2\n3'), 6 );
  });



  








});