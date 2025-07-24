function filterBlocks(query) {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => {
    block.style.display = block.textContent.toLowerCase().includes(query.toLowerCase()) ? '' : 'none';
  });
}