import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
base: '/', // /spotify-search-bar-vite/
plugins: [react()], 
  build: {
    rollupOptions: {
      external: []
    }
  }
});
//publicDir: '/spotify-search-bar-vite/',
//build: {
//  outDir: '/dist/',
//},
//});


