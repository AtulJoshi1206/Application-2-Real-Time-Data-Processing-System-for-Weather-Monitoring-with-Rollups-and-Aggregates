# 🌦️ Real-Time Weather Monitoring System with Rollups and Aggregates

### Overview
This project is a real-time data processing system designed to monitor weather conditions across major Indian metros and provide summarized insights with rollups and aggregates. Utilizing the OpenWeatherMap API, it fetches and analyzes weather data every few minutes to generate daily weather summaries and trigger alerts when certain thresholds are breached.

### 🚀 Key Features
- **Continuous Weather Monitoring:** Retrieves weather updates every 5 minutes from OpenWeatherMap API for metros like Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad.
- **Daily Summaries:** Aggregates data for each day, calculating:
  - Average, maximum, and minimum temperatures
  - Dominant weather condition based on the most frequent weather data
- **Configurable Alerts:** Allows users to set custom temperature or weather condition thresholds (e.g., alert if temperature exceeds 35°C for two consecutive updates).
- **Visualizations:** Displays daily summaries, historical trends, and triggered alerts in a user-friendly format.

### 📝 Prerequisites
1. **API Key**: Sign up on [OpenWeatherMap](https://openweathermap.org/) for a free API key.
2. **MongoDB Atlas**: Set up a free cloud instance on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### ⚙️ Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Real-Time-Weather-Monitoring.git
   cd Real-Time-Weather-Monitoring
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**  
   Create a `.env` file in the root directory:
   ```plaintext
   API_KEY=your_openweathermap_api_key
   MONGO_URI=your_mongodb_atlas_uri
   EMAIL=atul.joshi1206@gmail.com
   PHONE=+91821X9XXXX
   ```
4. **Run the Application**
   ```bash
   npm start
   ```

### 🧩 How It Works

#### 1. **Data Retrieval**
   - The system fetches weather data every 5 minutes based on configurable intervals.
   - Converts temperatures from Kelvin to Celsius or Fahrenheit based on user preferences.

#### 2. **Daily Weather Summaries**
   - At the end of each day, calculates and stores daily summaries:
     - **Average, max, and min temperatures** for the day
     - **Dominant weather condition**: Determined by the most frequent condition (e.g., Rain, Clear)
   - Stores data in MongoDB for easy retrieval and analysis.

#### 3. **Alert System**
   - Users can set custom alert thresholds, such as:
     - Temperature above 35°C for two consecutive readings
     - Specific weather conditions like heavy rain
   - When thresholds are exceeded, an email or SMS alert is sent using pre-configured email and phone number.

#### 4. **Visualizations**
   - Displays weather trends, daily summaries, and alerts on the dashboard for easy interpretation.

### 🧪 Test Cases

1. **System Setup**  
   - Confirms the API connection with a valid key.

2. **Data Retrieval**  
   - Simulates API calls at configurable intervals and ensures correct data parsing.

3. **Temperature Conversion**  
   - Tests temperature conversion from Kelvin to Celsius/Fahrenheit.

4. **Daily Weather Summary**  
   - Simulates weather data over multiple days to verify accuracy of aggregates like average, maximum, minimum temperature, and dominant condition.

5. **Alert Thresholds**  
   - Defines and triggers alerts when thresholds are breached to verify alert functionality.

### 🌟 Enhancements & Bonus Features
- Added support for extra weather parameters like humidity and wind speed.
- Integrated weather forecast summaries for enhanced prediction.

### 🖼️ Screenshots
We’ve included snapshots to illustrate system operation, daily summaries, and alert visualizations. Refer to the **/screenshots** directory for a visual overview.

### 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Weather API:** OpenWeatherMap
- **Visualization:** HTML, CSS, JavaScript (Frontend)

### 👨‍💻 Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/Real-Time-Weather-Monitoring.git

# Install dependencies
npm install

# Start the application
npm start
```

### ✉️ Alerts
Alerts are sent to **atul.joshi1206@gmail.com** and **+918218XXXXX** when thresholds are breached.

---
![WhatsApp Image 2024-10-26 at 12 50 38_29633c7d](https://github.com/user-attachments/assets/95513c53-b10e-4dd1-98a9-1abc29fab6de)
---

### 💡 Future Enhancements
- **Multi-city Support**: Add more cities or regions.
- **Advanced Analytics**: Provide weekly/monthly summaries and forecasting based on historical trends.

### 📜 License
MIT License.
