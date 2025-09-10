function Forecast({ forecast }) {
  if (!forecast || !forecast.list) return null;

  return (
    <div className="mt-6 w-full max-w-4xl">
      <h3 className="text-xl font-semibold mb-4 text-center">3-Hour Forecast</h3>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        {forecast.list.slice(0, 8).map((item, index) => {
          const date = new Date(item.dt * 1000);
          const time = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={index}
              className="min-w-[120px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex-shrink-0"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300">{time}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="mx-auto"
              />
              <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
              <p className="capitalize text-sm">{item.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
