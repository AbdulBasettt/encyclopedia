window.addEventListener('hashchange', () => {
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));
  const id = location.hash.slice(1);
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
});