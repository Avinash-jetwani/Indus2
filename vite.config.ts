import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root base so assets resolve for both custom domain and GitHub Pages
  base: '/',
  // Force an empty PostCSS config so Vite won't search parent directories
  css: {
    postcss: {
      plugins: [],
    },
  },
})
