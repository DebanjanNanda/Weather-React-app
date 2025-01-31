import axios from 'axios';

const API_KEY = '1dc3ce36acd3e2c60752b9b3f82161af';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};
