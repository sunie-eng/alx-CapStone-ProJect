function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-3xl">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>

      {/* More weather details */}
      <div className="mt-4 text-gray-600">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
        <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
