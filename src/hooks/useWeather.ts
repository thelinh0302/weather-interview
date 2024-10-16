
import { fetchWeather } from "@/apis";
import { WeatherData } from "@/types/authTypes";
import {
  useQuery,
} from "@tanstack/react-query";

const useWeatherQuery = (city: string) => {
  return useQuery<WeatherData, Error>({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city, // Only run the query when a city is provided
  });
};

export {
  useWeatherQuery
};
