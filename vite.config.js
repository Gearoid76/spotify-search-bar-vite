import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  base: '/spotify-search-bar-vite/',
});