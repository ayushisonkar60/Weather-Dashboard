// weatherService.js - Handles communication with OpenWeatherMap API

const axios = require('axios');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherByCity(city) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: process.env.WEATHER_API_KEY,
      units: 'metric',
    },
  });

  return response.data;
}

module.exports = { getWeatherByCity };