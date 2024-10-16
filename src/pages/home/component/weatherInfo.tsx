import { WeatherData } from "@/types/authTypes";
import React from "react";

interface IWeatherInfoComponent {
  isDarkMode: boolean;
  weatherData: WeatherData | undefined;
}
const WeatherInfoComponent: React.FC<IWeatherInfoComponent> = ({
  isDarkMode,
  weatherData,
}) => {
  return (
    <div className={`${isDarkMode ? "text-[#fff]" : "text-[#000]"} mb-4`}>
      <div className="text-[16px]">Today's Weather</div>
      <div
        className={`text-6xl font-bold ${
          isDarkMode ? "text-[#FFF]" : "text-[#6C40B5]"
        }`}
      >
        {weatherData && Math.round(weatherData.main.temp)}°
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm">
            H: {weatherData && Math.round(weatherData.main.temp_max)}° | L:{" "}
            {weatherData && Math.round(weatherData.main.temp_min)}°
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center ${
          isDarkMode ? "text-[#FFF]" : "text-[#666666]"
        } mt-3`}
      >
        <div className="text-sm">
          {weatherData && weatherData.name},{" "}
          {weatherData && weatherData.sys.country}
        </div>
        <div className="text-sm">
          {weatherData && new Date(weatherData.dt * 1000).toLocaleString()}
        </div>
        <div className="text-sm">
          Humidity: {weatherData && Math.round(weatherData.main.humidity)}%
        </div>
        <div className="text-sm">
          {weatherData && weatherData.weather[0].description}
        </div>
      </div>
    </div>
  );
};
export default WeatherInfoComponent;
