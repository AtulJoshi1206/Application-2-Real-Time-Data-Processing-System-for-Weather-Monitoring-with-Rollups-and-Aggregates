// backend/controllers/weatherController.js
const axios = require('axios');
const WeatherSummary = require('../models/WeatherSummary');
const nodemailer = require('nodemailer');

const apiID = 'b5f558462160da78810acd0bb997a9fd';
const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
const alertThreshold = 35; // Temperature threshold in Celsius

// Function to fetch weather data
const getWeatherData = async () => {
  try {
    return await Promise.all(cities.map(async (city) => {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}`);
      const tempCelsius = res.data.main.temp - 273.15;
      return {
        city,
        temp: tempCelsius,
        feels_like: res.data.main.feels_like - 273.15,
        condition: res.data.weather[0].main,
        dt: new Date(res.data.dt * 1000).toLocaleDateString(),
      };
    }));
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
};

// Process and store weather data in MongoDB
const processWeatherData = async () => {
  const data = await getWeatherData();
  data.forEach(async ({ city, temp, feels_like, condition, dt }) => {
    const existingSummary = await WeatherSummary.findOne({ city, date: dt });

    if (!existingSummary) {
      const summary = new WeatherSummary({
        city,
        date: dt,
        averageTemp: temp,
        maxTemp: temp,
        minTemp: temp,
        dominantCondition: condition,
        alertsTriggered: false,
      });
      await summary.save();
    }

    // Check for alerts
    if (temp > alertThreshold && !existingSummary?.alertsTriggered) {
      await sendEmailAlert(city, temp);
      await WeatherSummary.updateOne({ city, date: dt }, { alertsTriggered: true });
    }
  });
};

// Email alert function
const sendEmailAlert = async (city, temp) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'atul.joshi1206@gmail.com',
        pass: 'your_email_password',  // Replace with Gmail password or app password
      },
    });

    await transporter.sendMail({
      from: 'atul.joshi1206@gmail.com',
      to: 'recipient_email@gmail.com',  // Replace with recipient's email
      subject: `Weather Alert for ${city}`,
      text: `Alert! The temperature in ${city} has exceeded ${alertThreshold}°C. Current temperature is ${temp.toFixed(2)}°C.`,
    });
    console.log(`Email alert sent for ${city}`);
  } catch (error) {
    console.error('Error sending email alert:', error.message);
  }
};

module.exports = { processWeatherData };
