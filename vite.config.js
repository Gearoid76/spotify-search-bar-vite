import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https:vitejs.dev/config/
export default defineConfig({
  base: '/spotify-search-bar-vite/',
  plugins: [react()],
  build: {
    rollupOptions: {
        external: []
    }
  }
});

//import { defineConfig } from "vite";
//import dns from 'node:dns' //this is what i mean by swapping

//dns.setDefaultResultOrder('verbatim')
//export default defineConfig({
//})
