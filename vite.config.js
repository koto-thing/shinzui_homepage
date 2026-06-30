import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // GitHub Pages用のベースパスを設定します。
  base: '/shinzui_homepage/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news/index.html'),
        play: resolve(__dirname, 'play/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        support: resolve(__dirname, 'support/index.html'),
        download: resolve(__dirname, 'download/index.html'),
      },
    },
  },
})
