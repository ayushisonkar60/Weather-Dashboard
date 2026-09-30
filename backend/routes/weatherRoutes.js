// weatherRoutes.js - Defines weather-related API routes

const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weathercontroller.js');
router.get('/:city', getWeather);

module.exports = router;