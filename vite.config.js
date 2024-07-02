import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: 'docs/index.html',
  },
  plugins: [react()],
  base: '/spotify-search-bar-vite/'
})

