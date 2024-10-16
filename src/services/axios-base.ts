import axios, { AxiosInstance } from "axios";
import { retrieve } from "../utils";
import { handleResponseErrors } from "@/utils/errors";

class AxiosRequest {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this._setupInterceptors();
  }

  private _setupInterceptors() {
    this._instance.interceptors.request.use(async (config) => {
      config.headers = config.headers ?? {};
      try {
        const token = await retrieve("token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
      } catch (error) {}
      return config;
    });
    this._instance.interceptors.response.use(
      (response) => {
        const { data } = response;
        if (data?.errors) {
          const errors = handleResponseErrors(data?.errors);
          return Promise.reject(errors);
        }
        if (data instanceof Blob) {
          return data;
        }
        return data;
      },
      (error) => {
        const data = error.response?.data;
        const err = handleResponseErrors(error);
        return Promise.reject(err);
      }
    );
  }
  getInstance() {
    return this._instance;
  }
}
export default new AxiosRequest();
