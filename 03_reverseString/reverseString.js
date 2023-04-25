const reverseString = function(string) {
    let stringArray = string.split("");
    let newString = stringArray.reverse().join("");

    // for (i = 0; i < stringArray.length + 1; i++) {
    //     // let poppedCharacter = stringArray[i].pop();
    //     // stringArray.unshift(poppedCharacter);
    // }

    // let newString = stringArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
