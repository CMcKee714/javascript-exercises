const convertToCelsius = function(value) {
  let tempInC = (value - 32) * (5 / 9);
  tempInC = +tempInC.toFixed(1);
  return tempInC;
};

const convertToFahrenheit = function(value) {
  let tempInF = value * (9 / 5) + 32;
  tempInF = +tempInF.toFixed(1);
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
