/**
 * 共通ヘッダーコンポーネントを初期化し、ページ上部に挿入します。
 */
export function initHeader() {
  const app = document.querySelector('#app');
  if (!app) return;

  // GitHub Pages用のベースパス
  const basePath = '/shinzui_homepage/';

  const headerHtml = `
    <header class="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/80">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <!-- ロゴ / サイト名 -->
        <div class="flex items-center">
          <a href="${basePath}" class="flex items-center gap-2 text-xl font-black tracking-wider text-neutral-950 dark:text-white transition-opacity hover:opacity-80">
            <span>SHINZUI</span>
          </a>
        </div>

        <!-- ナビゲーションリンク (デスクトップ版) -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="${basePath}" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="home">
            ホーム
          </a>
          <a href="${basePath}news/" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="news">
            おしらせ
          </a>
          <a href="${basePath}play/" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="play">
            あそびかた
          </a>
          <a href="${basePath}gallery/" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="gallery">
            ギャラリー
          </a>
          <a href="${basePath}support/" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="support">
            サポート
          </a>
        </nav>

        <!-- アクションボタン (デスクトップ版) -->
        <div class="flex items-center gap-4">
          <a href="${basePath}download/" class="hidden sm:inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 transition-colors shadow-sm" data-page="download">
            ダウンロード
          </a>
          
          <!-- モバイルメニュー開閉ボタン -->
          <button id="mobile-menu-btn" class="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden" aria-label="メニューを開閉" aria-expanded="false">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- モバイルナビゲーションメニュー -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-neutral-200/80 bg-white/95 dark:border-neutral-800/80 dark:bg-neutral-900/95 px-4 py-3 space-y-1">
        <a href="${basePath}" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="home">ホーム</a>
        <a href="${basePath}news/" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="news">おしらせ</a>
        <a href="${basePath}play/" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="play">あそびかた</a>
        <a href="${basePath}gallery/" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="gallery">ギャラリー</a>
        <a href="${basePath}support/" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="support">サポート</a>
        <a href="${basePath}download/" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="download">ダウンロード</a>
      </div>
    </header>
  `;

  // #app の先頭にヘッダーを挿入
  app.insertAdjacentHTML('afterbegin', headerHtml);

  // 現在のページに応じたアクティブ状態のクラス適用
  const currentPath = window.location.pathname;
  let activePage = 'home';
  if (currentPath.includes('/news/')) activePage = 'news';
  else if (currentPath.includes('/play/')) activePage = 'play';
  else if (currentPath.includes('/gallery/')) activePage = 'gallery';
  else if (currentPath.includes('/support/')) activePage = 'support';
  else if (currentPath.includes('/download/')) activePage = 'download';

  const activeLinks = app.querySelectorAll(`[data-page="${activePage}"]`);
  activeLinks.forEach(link => {
    // アクティブなリンクのスタイリング
    link.classList.remove('text-neutral-600', 'dark:text-neutral-400');
    link.classList.add('text-neutral-950', 'font-semibold', 'dark:text-white');
    
    // デスクトップ版のナビゲーションには下線風のデコレーションを追加
    if (link.classList.contains('nav-link')) {
      link.insertAdjacentHTML('beforeend', '<span class="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-950 dark:bg-white rounded-full"></span>');
    }
  });

  // モバイルメニューの開閉制御
  const mobileMenuBtn = app.querySelector('#mobile-menu-btn');
  const mobileMenu = app.querySelector('#mobile-menu');
  const menuIconPath = app.querySelector('#menu-icon-path');

  if (mobileMenuBtn && mobileMenu && menuIconPath) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      // アイコンを「三」と「✕」で切り替え
      if (isExpanded) {
        // ハンバーガーアイコンに戻す
        menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      } else {
        // 閉じる(✕)アイコンにする
        menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    });
  }
}
