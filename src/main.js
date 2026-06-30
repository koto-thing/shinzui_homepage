import './style.css'
import { initHeader } from './components/Header.js'
import { initFooter } from './components/Footer.js'

// 各セクションの初期化関数をインポート
import { initHome } from './pages/Home.js'
import { initNews } from './pages/News.js'
import { initPlay } from './pages/Play.js'
import { initGallery } from './pages/Gallery.js'
import { initSupport } from './pages/Support.js'
import { initDownload } from './pages/Download.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  if (!app) return;

  // メインコンテナ（<main>）を生成して配置
  const main = document.createElement('main');
  main.className = 'flex-grow';
  app.appendChild(main);

  // 各ページ・セクションの中身をDOMに挿入
  initHome(main);
  initNews(main);
  initPlay(main);
  initGallery(main);
  initSupport(main);
  initDownload(main);

  // 共通フッターの挿入
  initFooter(app);

  // 共通ヘッダーの挿入
  initHeader();
});
