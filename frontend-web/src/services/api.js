import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.101:3333',
});

api.interceptors.request.use((config) => {
  const data = JSON.parse(localStorage.getItem('@bethehero'));
  if (data) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${data.token}`;
  }
  return config;
});

export default api;
