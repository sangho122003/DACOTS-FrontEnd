import axios from "axios";

// Tạo một instance của axios
const weatherapi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

// Key API từ biến môi trường
const API_KEY = process.env.REACT_APP_KEY_API_WEATHER;

// Hàm gọi API thời tiết
export const getWeatherData = async (city) => {
  try {
    const response = await weatherapi.get(``, {
      params: {
        q: city, // Tên thành phố
        units: "metric", // Đơn vị: Celsius
        appid: API_KEY, // API Key
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default weatherapi;
