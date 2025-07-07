const env = import.meta.env;

export const ENVCONFIG = {
  VITE_API_URL: env.VITE_API_URL ?? 'http://localhost:3232/api/v0',
};
