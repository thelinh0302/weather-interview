import axiosBase from "@/services/axios-base";
import { WeatherData } from "@/types/authTypes";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await axiosBase.getInstance().get(
    `/weather?q=${city}&units=metric&appid=02d01caf73b2ce7d71a1f81f4deab687`
  );
  return response;
};
