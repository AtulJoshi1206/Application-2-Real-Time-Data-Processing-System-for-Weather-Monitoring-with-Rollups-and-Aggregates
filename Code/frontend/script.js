// Fetch current weather data and update the UI
async function fetchWeatherData() {
  try {
    const response = await fetch('/api/weather/current'); // Adjust endpoint as needed
    const data = await response.json();

    // Update current weather section
    document.getElementById('city-name').textContent = `City: ${data.city}`;
    document.getElementById('temp').textContent = `Temperature: ${data.temp} °C`;
    document.getElementById('feels-like').textContent = `Feels Like: ${data.feels_like} °C`;
    document.getElementById('condition').textContent = `Condition: ${data.condition}`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Fetch daily summaries and update the UI
async function fetchDailySummaries() {
  try {
    const response = await fetch('/api/weather/daily-summary');
    const summaries = await response.json();
    const summaryList = document.getElementById('summary-list');

    summaries.forEach(summary => {
      const summaryItem = document.createElement('div');
      summaryItem.className = 'summary-info';
      summaryItem.innerHTML = `
        <p><strong>${summary.date}</strong></p>
        <p>Avg Temp: ${summary.averageTemp}°C</p>
        <p>Max Temp: ${summary.maxTemp}°C</p>
        <p>Min Temp: ${summary.minTemp}°C</p>
        <p>Condition: ${summary.dominantCondition}</p>
      `;
      summaryList.appendChild(summaryItem);
    });
  } catch (error) {
    console.error('Error fetching daily summaries:', error);
  }
}

// Fetch alert history
async function fetchAlertHistory() {
  try {
    const response = await fetch('/api/weather/alerts');
    const alerts = await response.json();
    const alertList = document.getElementById('alert-list');

    alerts.forEach(alert => {
      const alertItem = document.createElement('div');
      alertItem.className = 'alert-info';
      alertItem.innerHTML = `
        <p><strong>${alert.date}</strong> - ${alert.city}</p>
        <p>${alert.message}</p>
      `;
      alertList.appendChild(alertItem);
    });
  } catch (error) {
    console.error('Error fetching alert history:', error);
  }
}

// Initial data fetching
fetchWeatherData();
fetchDailySummaries();
fetchAlertHistory();
