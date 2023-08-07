// test.js
const temperatureConverter = require('./index');

const celsiusValue = 25;
const fahrenheitValue = 77;
const city = 'New York'; // Replace this with the city you want to get the temperature for

console.log(`${celsiusValue} Celsius to Fahrenheit: ${temperatureConverter.celsiusToFahrenheit(celsiusValue)}`);
console.log(`${fahrenheitValue} Fahrenheit to Celsius: ${temperatureConverter.fahrenheitToCelsius(fahrenheitValue)}`);

temperatureConverter.getTemperature(city)
  .then((temperature) => {
    console.log(`Current temperature in ${city}: ${temperature}°C`);
  })
  .catch((error) => {
    console.error(error.message);
  });
