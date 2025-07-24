// Поиск по названию
function filterBlocks(term) {
  const items = document.querySelectorAll('.block');
  items.forEach(item => {
    const title = item.textContent.toLowerCase();
    item.style.display = title.includes(term.toLowerCase()) ? '' : 'none';
  });
}