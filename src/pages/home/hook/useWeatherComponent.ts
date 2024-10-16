import { useEffect, useState } from "react";
import { useWeatherQuery } from "@/hooks";

const useWeatherComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [city, setCity] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<
    { id: number; city: string; date: string }[]
  >([]);

  const { data: weatherData, isError, isLoading } = useWeatherQuery(searchCity);
  const handleSearch = () => {
    if (city) {
      setSearchCity(city);
      setCity("");
    }
  };

  useEffect(() => {
    if (weatherData) {
      setSearchHistory((prev) => [
        {
          id: prev.length + 1,
          city: weatherData.name,
          date: new Date().toLocaleString(),
        },
        ...prev,
      ]);
    }
  }, [weatherData]);
  const handleDeleteSearchHistory = (id: number) => {
    const newHistory = searchHistory.filter((item) => item.id !== id);
    setSearchHistory(newHistory);
  };
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleSearchAgain = (city: string) => {
    if (city) {
      setSearchCity(city);
      setCity(city);
    }
  };
  const descriptionWeather = ["Rain", "Clouds", "Snow"];
  return {
    isLoading,
    isError,
    weatherData,
    city,
    descriptionWeather,
    searchHistory,
    isDarkMode,
    setCity,
    setSearchCity,
    handleSearch,
    handleDeleteSearchHistory,
    handleSearchAgain,
    toggleMode,
  };
};
export default useWeatherComponent;
