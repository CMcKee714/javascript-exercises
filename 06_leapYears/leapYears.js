const leapYears = function(value) {
if (value % 100 == 0 && value % 400 !== 0) {
    return false;
} else if (value % 4 == 0) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
