import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for local dev, '/portfolio-website/' for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})