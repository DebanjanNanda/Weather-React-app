import React, { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';
import '../styles/WeatherDisplay.css'; // Import the CSS file

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const data = await getWeatherByCity(city);
    setWeather(data);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="weather-display-container">
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
          onKeyPress={handleKeyPress} // Attach the key press event handler
        />
        <button onClick={fetchWeather} className="search-button">Search</button>
      </div>

      {weather && (
        <div className="weather-info">
          <div className="location">{weather.name}</div>
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="description">{weather.weather[0].description}</div>
          <div className="additional-info">
            <div>Humidity: {weather.main.humidity}%</div>
            <div>Wind: {Math.round(weather.wind.speed)} m/s</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
