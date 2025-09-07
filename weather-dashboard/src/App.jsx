import { useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">BRHAM WEATHER</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
