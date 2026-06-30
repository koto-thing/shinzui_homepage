export function initFooter(container) {
  const footer = document.createElement('footer');
  footer.className = 'border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-8 text-center text-sm text-neutral-500';
  
  footer.innerHTML = `
    <p>&copy; 2026 SHINZUI. All rights reserved.</p>
  `;
  
  container.appendChild(footer);
}
