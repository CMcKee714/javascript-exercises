const add = function(firstValue, secondValue) {
	let finalValue = firstValue + secondValue;
  return finalValue;
};

const subtract = function(firstValue, secondValue) {
	lesserValue = Math.min(firstValue, secondValue);
  greaterValue = Math.max(firstValue, secondValue);
  finalValue = greaterValue - lesserValue;
  return finalValue;
};

const sum = function(numbers) {
  let finalSum = 0;
  numbers.forEach(addNumbers);
  
  function addNumbers(numbers) {
    finalSum += numbers;
  }
  return finalSum;
};

const multiply = function(numbers) {
  let finalSum = numbers.reduce( (a, b) => a * b);
  return finalSum;
};

const power = function(firstValue, secondValue) {
	let finalSum = Math.pow(firstValue, secondValue);
  return finalSum;
};

const factorial = function(n) {
	finalSum = 1;
  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      finalSum *= i;
    }
  };
  return finalSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
