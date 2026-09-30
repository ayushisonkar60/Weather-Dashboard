// historyRoutes.js - Defines search-history-related API routes

const express = require('express');
const router = express.Router();
const { getHistory, deleteHistoryItem } = require('../controllers/historyController');

router.get('/', getHistory);
router.delete('/:id', deleteHistoryItem);

module.exports = router;