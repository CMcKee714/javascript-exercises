const repeatString = function(string, num) {
    let newString = "";

    if (num < 0) {
        newString = "ERROR";
    } else {
        for (i = 0; num > i; i++) {
            newString += string;
        }
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
