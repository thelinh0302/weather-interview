export interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number
  };
  sys: {
    country: string;
  };
  name: string;
  dt: number;
  weather: {
    description: string;
    icon: string;
    main: string
  }[];
}
