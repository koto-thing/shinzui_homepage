import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // GitHub Pages用のベースパスを設定します。
  base: '/shinzui_homepage/',
})
