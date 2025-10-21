import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain (portfolio.mallikarjunatech.com)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})