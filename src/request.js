import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = '7a4b7720d7f2e7d7039b8ccf001ba04c';
  return config;
})

export default api;