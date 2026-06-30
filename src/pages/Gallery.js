export function initGallery(container) {
  const section = document.createElement('section');
  section.id = 'gallery';
  section.className = 'min-h-screen flex items-center justify-center pt-16 border-t border-neutral-200 dark:border-neutral-800';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl font-bold tracking-tight mb-6 text-neutral-950 dark:text-white">ギャラリー</h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">スクリーンショットやコンセプトアートを展示します。</p>
    </div>
  `;
  
  container.appendChild(section);
}
