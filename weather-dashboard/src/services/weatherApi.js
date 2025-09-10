const API_KEY = "4ade932901c25312d863f81579ae6e56"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Fetch current weather for a given city
 */
export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};

/**
 * Fetch 5-day forecast (every 3 hours) for a given city
 */
export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};
