// weatherController.js - Handles the request/response for weather endpoints

const { getWeatherByCity } = require('../services/weatherService');
const SearchHistory = require('../models/SearchHistory');

async function getWeather(req, res) {
  const { city } = req.params;

  if (!city || city.trim() === '') {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const data = await getWeatherByCity(city);

    const weather = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      visibility: data.visibility,
    };

    // Save this successful search to MongoDB
    try {
      await SearchHistory.create({
        city: weather.city,
        country: weather.country,
        temperature: weather.temperature,
        condition: weather.condition,
        humidity: weather.humidity,
        windSpeed: weather.windSpeed,
        pressure: weather.pressure,
      });
    } catch (saveError) {
      // Don't fail the whole request if saving history fails —
      // the user still gets their weather data either way
      console.error('Failed to save search history:', saveError.message);
    }

    res.status(200).json(weather);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: 'City not found' });
    }
    console.error('Weather API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

module.exports = { getWeather };