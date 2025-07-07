import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexões externas
    port: 5173,
    hmr: {
      port: 5173,
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    },
  },
});
