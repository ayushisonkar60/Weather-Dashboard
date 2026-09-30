// server.js - Entry point of our backend application

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');
const historyRoutes = require('./routes/historyRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);
app.use('/api/history', historyRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Weather Dashboard API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});