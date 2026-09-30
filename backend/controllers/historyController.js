// historyController.js - Handles requests for search history

const SearchHistory = require('../models/SearchHistory');

async function getHistory(req, res) {
  try {
    const history = await SearchHistory.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(history);
  } catch (error) {
    console.error('Failed to fetch history:', error.message);
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
}

async function deleteHistoryItem(req, res) {
  const { id } = req.params;

  try {
    const deleted = await SearchHistory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'History item not found' });
    }

    res.status(200).json({ message: 'Deleted successfully', id });
  } catch (error) {
    console.error('Failed to delete history item:', error.message);
    res.status(500).json({ error: 'Failed to delete history item' });
  }
}

module.exports = { getHistory, deleteHistoryItem };