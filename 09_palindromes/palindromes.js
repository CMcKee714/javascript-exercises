const palindromes = function (str) {
    var re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, "");
    let reversedString = lowRegStr.split("").reverse().join("");
    
    return reversedString === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
