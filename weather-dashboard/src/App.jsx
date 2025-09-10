import { useState } from "react";
import { fetchWeather, fetchForecast } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle"; 

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(city);
      const forecastData = await fetchForecast(city);
      setWeather(data);
      setForecast(forecastData);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError("City not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="w-full max-w-4xl mb-4 text-center">
        <h1 className="text-4xl font-bold">BRHAM WEATHER</h1>
      </div>
     <div className="fixed top-6 right-6 z-50">
         <DarkModeToggle />
      </div>


      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
