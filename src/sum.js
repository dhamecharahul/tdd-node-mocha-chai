function sumNumbersWithSeparator(numbers) {
    
    if (!numbers) {
        return 0;
    }

    // Handle custom delimiters
    let delimiter = ',\n';
    if (numbers.startsWith('//')) {
      delimiter = numbers.substring(2, numbers.indexOf('\n'));
      numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }
    return numbers;

}

module.exports = sumNumbersWithSeparator;
