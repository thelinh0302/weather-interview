import { defineConfig } from 'vite'
import tailwindcss from "tailwindcss";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 8080,
  },
  resolve: {
        alias: [{ find: '@', replacement: '/src' }],
  }
})
