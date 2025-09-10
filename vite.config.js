import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'assets': resolve(__dirname, './src/assets'),
      'components': resolve(__dirname, './src/components'),
      'layouts': resolve(__dirname, './src/layouts'),
      'views': resolve(__dirname, './src/views'),
      'theme': resolve(__dirname, './src/theme'),
      'variables': resolve(__dirname, './src/variables'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@chakra-ui/react']
  }
})