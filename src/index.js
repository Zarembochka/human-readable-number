module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }

    let thirdDigit = number % 10;
    let sekondDigit = Math.floor((number % 100)/ 10);
    let firstDigit = Math.floor((number % 1000)/ 100);

    return convertThreeDigitToWord(firstDigit, sekondDigit, thirdDigit);
}

const convertThreeDigitToWord = (firstDigit, secondDigit, thirdDigit) => {

    let result = '';

    if (firstDigit !== 0) {
        result = convertOneDigitToWord(firstDigit) + ' hundred';
    }

    switch (secondDigit) {
        case 0:
            result = result + ' ' + convertOneDigitToWord(thirdDigit);
            break;
        case 1:
            result = result + ' ' + convertOneDigitToWord(thirdDigit, true); 
            break;
        default:
            result = result + ' ' + convertOneDigitToWord(secondDigit, false, true) + ' ' + convertOneDigitToWord(thirdDigit);
            break;
    }

    return result.trim();
}

const convertOneDigitToWord = (digit, flagFrom10To20 = false, flagFrom20To99 = false) => {

    let result = '';

    switch (digit) {
        case 0:
            result = (flagFrom10To20) ? 'ten' : ''; 
            break;
        case 1:
            result = (flagFrom10To20) ? 'eleven' : 'one';
            break;
        case 2:
            if (flagFrom20To99) {
                result = 'twenty';
            } else {
                result = (flagFrom10To20) ? 'twelve' : 'two';
            }
            break;
        case 3:
            if (flagFrom20To99) {
                result = 'thirty';
            } else {
                result = (flagFrom10To20) ? 'thirteen' : 'three';
            }
            break;
        case 4:
            if (flagFrom20To99) {
                result = 'forty';
            } else {
                result = (flagFrom10To20) ? 'fourteen' : 'four';
            }
            break;
        case 5:
            if (flagFrom20To99) {
                result = 'fifty';
            } else {
                result = (flagFrom10To20) ? 'fifteen' : 'five';
            }
            break;
        case 6:
            if (flagFrom20To99) {
                result = 'sixty';
            } else {
                result = (flagFrom10To20) ? 'sixteen' : 'six';
            }
            break;
        case 7:
            if (flagFrom20To99) {
                result = 'seventy';
            } else {
                result = (flagFrom10To20) ? 'seventeen' : 'seven';
            }
            break;
        case 8:
            if (flagFrom20To99) {
                result = 'eighty';
            } else {
                result = (flagFrom10To20) ? 'eighteen' : 'eight';
            }
            break;
        case 9:
            if (flagFrom20To99) {
                result = 'ninety';
            } else {
                result = (flagFrom10To20) ? 'nineteen' : 'nine';
            }
            break;
    }

    return result;
}