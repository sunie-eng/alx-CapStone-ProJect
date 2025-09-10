import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  // Convert sunrise & sunset (API gives seconds, JS needs ms)
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-80 text-center">
      {/* City name */}
      <h2 className="text-2xl font-semibold">{weather.name}</h2>

      {/* Main temperature */}
      <p className="text-4xl font-bold my-2">
        {Math.round(weather.main.temp)}°C
      </p>

      {/* Weather condition */}
      <p className="capitalize text-lg mb-4">{weather.weather[0].description}</p>

      {/* Extra details */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-semibold">Pressure</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-semibold">Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div>
          <p className="font-semibold">Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
