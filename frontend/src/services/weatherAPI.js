// weatherApi.js - Handles all calls to OUR backend (not OpenWeatherMap directly)

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchWeather(city) {
  const response = await axios.get(`${API_BASE_URL}/weather/${city}`);
  return response.data;
}

export async function fetchHistory() {
  const response = await axios.get(`${API_BASE_URL}/history`);
  return response.data;
}

export async function deleteHistoryItem(id) {
  const response = await axios.delete(`${API_BASE_URL}/history/${id}`);
  return response.data;
}