const fibonacci = function(n) {
    parseInt(n);
    let n1 = 0, n2 = 1;
    let nextNumber = 1;

    if (n < 0) {
        return "OOPS";
    } else if (n <= 1) {
        return nextNumber;
    } else {
        for (let i = 2; i <= n; i++) {
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
        }
        return nextNumber;
    }

};

// Do not edit below this line
module.exports = fibonacci;
