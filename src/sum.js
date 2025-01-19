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

    const separatorRegex = new RegExp(`[${delimiter.split('').map(char => '\\' + char).join('|')}]`);

    const parsedNumbers = numbers.split(separatorRegex)
        .map(num => {
            const trimmedNum = num.trim();
            return parseInt(trimmedNum);
        });
    return parsedNumbers;



}

module.exports = sumNumbersWithSeparator;
