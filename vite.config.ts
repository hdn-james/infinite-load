import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    open: true,
  },
  plugins: [react()],
})
