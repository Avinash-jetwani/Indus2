import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo sub-path so assets resolve on GitHub Pages default domain
  base: '/Indus2/',
  // Force an empty PostCSS config so Vite won't search parent directories
  css: {
    postcss: {
      plugins: [],
    },
  },
})
