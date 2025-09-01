const API_KEY = "4ade932901c25312d863f81579ae6e56"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}
