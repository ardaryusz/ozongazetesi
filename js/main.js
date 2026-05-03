
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('ozon-theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ozon-theme');
  if(saved === 'dark') document.body.classList.add('dark');
});
