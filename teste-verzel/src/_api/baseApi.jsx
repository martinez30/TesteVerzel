import axios from 'axios'
import { getToken } from '../auth/auth.guard'

const baseURL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: baseURL
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;