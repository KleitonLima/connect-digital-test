import { ENVCONFIG } from './env.config';

const api = axios.create({
  baseURL: ENVCONFIG.VITE_API_URL,
});

export default api;
