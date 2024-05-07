import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Specify your desired port here
  //   proxy:{
  //     "/api":"https://tkaunversite.com"
  // }
  }
  
})
