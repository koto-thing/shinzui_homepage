import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // GitHub Pages用のベースパスを設定します。
  // GitHubリポジトリ名が「shinzui_homepage」であると仮定しています。
  // 異なるリポジトリ名にする場合は、以下の値を該当のリポジトリ名に変更してください。
  base: '/shinzui_homepage/',
})
