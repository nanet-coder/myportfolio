import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base depending on where you deploy
// For GitHub Pages, replace 'my-portfolio' with your repo name
const BASE_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/my-portfolio/' : '/'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL,
})
