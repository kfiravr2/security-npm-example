// index.js
const axios = require('axios');

module.exports = {
  celsiusToFahrenheit: function(celsius) {
    return (celsius * 9/5) + 32;
  },

  fahrenheitToCelsius: function(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  },

  getTemperature: async function(city) {
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace this with your actual API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      const temperature = response.data.main.temp;

      return temperature;
    } catch (error) {
      throw new Error('Failed to fetch temperature data.');
    }
  }
};
