let app = document.getElementById('app');

let state = {
  blocks: [],
  selectedBlock: null
};

function loadBlocks() {
  fetch('blocks.json')
    .then(res => res.json())
    .then(data => {
      state.blocks = data;
      render();
    });
}

function render() {
  if (state.selectedBlock) {
    app.innerHTML = `
      <header>📘 ${state.selectedBlock.title}</header>
      <div class="container">
        <div class="back-button" onclick="goBack()">← Назад</div>
        <div>${state.selectedBlock.content}</div>
      </div>
    `;
  } else {
    app.innerHTML = `
      <header>📚 Энциклопедия Абдула</header>
      <div class="container">
        ${state.blocks.map((block, i) => `
          <div class="block" onclick="openBlock(${i})">${block.title}</div>
        `).join('')}
      </div>
    `;
  }
}

function openBlock(index) {
  state.selectedBlock = state.blocks[index];
  render();
}

function goBack() {
  state.selectedBlock = null;
  render();
}

document.addEventListener('DOMContentLoaded', loadBlocks);