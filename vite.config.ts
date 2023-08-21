import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': '/src/styles',
      '@contexts': '/src/contexts',
      '@components': '/src/components',
      '@shared': '/src/shared',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
    },
  },
})
