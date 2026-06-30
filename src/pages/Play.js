export function initPlay(container) {
  const section = document.createElement('section');
  section.id = 'play';
  section.className = 'min-h-screen flex items-center justify-center pt-16 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl font-bold tracking-tight mb-6 text-neutral-950 dark:text-white">あそびかた</h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">ゲームのルールや操作方法、基本的な遊び方を解説します。</p>
    </div>
  `;
  
  container.appendChild(section);
}
