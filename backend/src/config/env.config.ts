import 'dotenv/config';

const env = process.env;

export const ENVCONFIG = {
  PORT: env.PORT ?? 3232,
  DATABASE_URL: env.DATABASE_URL,
  BACKEND_URL: env.BACKEND_URL ?? 'http://localhost:3232/api/v0',
};
