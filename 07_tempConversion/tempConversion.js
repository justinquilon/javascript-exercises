const convertToCelsius = function (Fahrenheit) {
  let celcius = (Fahrenheit - 32) * (5 / 9);
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function (Celsius) {
  let fahrenheit = Celsius * (9 / 5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
