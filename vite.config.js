import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://666756e0a2f8516ff7a72f05.mockapi.io',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
