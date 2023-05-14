import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";

// Inisialisasi Axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
  timeout: 5000, // Sesuaikan dengan kebutuhan Anda
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("TOKEN"); // Ganti dengan token Anda

    // Menambahkan bearer token ke header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    // Tangani error pada request
    toast.error(error.message);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Tangani error pada response
    toast.error(error.message);
    return Promise.reject(error);
  }
);

export default api;
