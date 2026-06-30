export function initSupport(container) {
  const section = document.createElement('section');
  section.id = 'support';
  section.className = 'min-h-screen flex items-center justify-center pt-16 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl font-bold tracking-tight mb-6 text-neutral-950 dark:text-white">サポート</h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">お問い合わせ窓口や、よくある質問（FAQ）を掲載します。</p>
    </div>
  `;
  
  container.appendChild(section);
}
