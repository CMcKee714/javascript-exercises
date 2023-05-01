const sumAll = function(firstNumber, lastNumber) {
    let finalSum = 0;
    let smallerNumber = Math.min(firstNumber, lastNumber);
    let largerNumber = Math.max(firstNumber, lastNumber);

    if (smallerNumber < 0 || 
        isNaN(firstNumber) || 
        isNaN(lastNumber) || 
        typeof firstNumber === 'string' || 
        typeof lastNumber === 'string') 
        {   return 'ERROR'; }

    else if (smallerNumber < largerNumber) {
        let i = smallerNumber;

        do {
            finalSum += smallerNumber;
            smallerNumber += 1;
            i += 1;
        } while (i <= largerNumber);
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
