import axios, { AxiosInstance } from "axios";
import { getData } from "../Repository/Storage";

const BASE_URL = `https://api.spotify.com/v1`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req: any) => {
  const acces_token = await getData("@access_token");
  req.headers.Authorization = `Bearer ${acces_token}`;
  return req;
});

export default axiosInstance;
