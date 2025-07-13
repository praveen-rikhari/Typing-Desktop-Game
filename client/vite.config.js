import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 THIS is required so assets work in Electron
  plugins: [react()],
})
