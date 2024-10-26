const express = require('express');
const mongoose = require('./db');
const { processWeatherData } = require('./controllers/weatherController');
const WeatherSummary = require('./models/WeatherSummary'); // Import the model
const cron = require('node-cron');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('YOUR_MONGODB_ATLAS_CONNECTION_STRING', {
  // remove deprecated options
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
});



// Schedule data processing to run every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  try {
    console.log('Updating weather data...');
    await processWeatherData();
  } catch (error) {
    console.error('Error updating weather data:', error);
  }
});

// Serve current weather data
app.get('/api/weather/current', async (req, res) => {
  try {
    const data = await processWeatherData(); // Fetch latest weather data
    res.json(data[0]);  // Return the data for the first city
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    res.status(500).json({ message: 'Error fetching current weather data' });
  }
});

// Serve daily summary data
app.get('/api/weather/daily-summary', async (req, res) => {
  try {
    const summaries = await WeatherSummary.find(); // Retrieve daily summaries from MongoDB
    res.json(summaries);
  } catch (error) {
    console.error('Error fetching daily summary data:', error);
    res.status(500).json({ message: 'Error fetching daily summary data' });
  }
});

// Serve alert history
app.get('/api/weather/alerts', async (req, res) => {
  try {
    const alerts = await WeatherSummary.find({ alertsTriggered: true }); // Retrieve triggered alerts
    res.json(alerts);
  } catch (error) {
    console.error('Error fetching alert data:', error);
    res.status(500).json({ message: 'Error fetching alert data' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
