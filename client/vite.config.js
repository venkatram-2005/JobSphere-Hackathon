import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Replace 3000 with your desired port number
  },
  envDir: './', // Ensures .env is loaded from the root
})
