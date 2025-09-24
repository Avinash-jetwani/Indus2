import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  base: '/Indus2/',
  // Force an empty PostCSS config so Vite won't search parent directories
  css: {
    postcss: {
      plugins: [],
    },
  },
})
