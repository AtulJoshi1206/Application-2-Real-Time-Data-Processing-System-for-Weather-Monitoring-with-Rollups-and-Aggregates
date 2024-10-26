// backend/models/WeatherSummary.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  date: String,
  averageTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantCondition: String,
  alertsTriggered: Boolean,
});

module.exports = mongoose.model('WeatherSummary', weatherSchema);
