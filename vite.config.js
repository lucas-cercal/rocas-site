import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['.ngrok-free.app', '.ngrok.app', 'localhost', '127.0.0.1'],
  },
});
