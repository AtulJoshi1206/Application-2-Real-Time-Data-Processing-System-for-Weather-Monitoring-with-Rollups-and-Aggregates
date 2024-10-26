// backend/routes/weatherRoutes.js
const express = require('express');
const { getWeatherData, processWeatherData } = require('../controllers/weatherController');
const router = express.Router();

router.get('/fetch', async (req, res) => {
  const data = await getWeatherData();
  res.json(data);
});

module.exports = router;
