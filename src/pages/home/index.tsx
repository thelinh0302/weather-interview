import { useState } from "react";
import sun from "@/assets/sun.png";
import cloud from "@/assets/cloud.png";
import SearchBarComponent from "./component/searchBar";
import WeatherInfoComponent from "./component/weatherInfo";
import SearchHistoryComponent from "./component/searchHistory";
import "./styles.scss";
import useWeatherComponent from "./hook/useWeatherComponent";

const Home = () => {
  const {
    handleSearch,
    setCity,
    handleDeleteSearchHistory,
    handleSearchAgain,
    toggleMode,
    weatherData,
    descriptionWeather,
    searchHistory,
    city,
    isError,
    isLoading,
    isDarkMode,
  } = useWeatherComponent();
  return (
    <div
      className={`h-screen w-screen transition-colors duration-500  ${
        isDarkMode
          ? "bg-custom-dark bg-transition"
          : "bg-custom-light bg-transition"
      }  `}
    >
      <div className="flex justify-end p-5">
        <button
          onClick={toggleMode}
          className="mb-6 p-2 rounded-full bg-purple-500 text-white"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex items-center justify-center sm:p-0 p-[10px]">
        <div className="w-full max-w-lg">
          <SearchBarComponent
            handleSearch={handleSearch}
            setCity={setCity}
            city={city}
            isDarkMode={isDarkMode}
          />
          <div className="relative">
            <div className="w-[160px] h-[160px] absolute right-0 top-[-60px]">
              {weatherData &&
              descriptionWeather.includes(weatherData.weather[0].main) ? (
                <img src={cloud} alt="weather icon" className="w-full h-full" />
              ) : (
                <img src={sun} alt="weather icon" className="w-full h-full" />
              )}
            </div>
            <div className="w-full max-w-lg bg-white bg-opacity-20  rounded-3xl p-8 shadow-xl">
              {/* Weather Info */}
              {weatherData ? (
                <WeatherInfoComponent
                  weatherData={weatherData}
                  isDarkMode={isDarkMode}
                />
              ) : isError ? (
                <div>Not Found location</div>
              ) : isLoading ? (
                <div>Loading...</div>
              ) : (
                <div>Let select location</div>
              )}

              {/* Search History */}
              <SearchHistoryComponent
                handleSearchAgain={handleSearchAgain}
                handleDeleteSearchHistory={handleDeleteSearchHistory}
                searchHistory={searchHistory}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
