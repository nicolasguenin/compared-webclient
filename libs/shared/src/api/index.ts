import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
