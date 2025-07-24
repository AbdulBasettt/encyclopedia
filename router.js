// Простая маршрутизация
function navigateTo(hash) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  const target = document.getElementById(hash);
  if (target) target.style.display = '';
}
window.addEventListener('hashchange', () => {
  navigateTo(location.hash.slice(1));
});
window.addEventListener('load', () => {
  if (location.hash) {
    navigateTo(location.hash.slice(1));
  }
});