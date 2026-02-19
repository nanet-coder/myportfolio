import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
<<<<<<< HEAD
  base: '/my-portfolio/',
=======
  base: process.env.VERCEL ? '/' : '/myportfolio/',
>>>>>>> e5f5d08387d211c3c9fd577d2ec99391e70468c6
})
