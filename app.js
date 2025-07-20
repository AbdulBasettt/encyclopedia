// Основной JS: навигация, фильтры, офлайн, настройки

const blocksData = [
  {
    id: "intro",
    title: {
      ru: "Введение",
      en: "Introduction"
    },
    content: {
      ru: "<p>Добро пожаловать в энциклопедию Абдула Басета.</p>",
      en: "<p>Welcome to Abdul Baset's Encyclopedia.</p>"
    }
  },
  {
    id: "section1",
    title: { ru: "Раздел 1", en: "Section 1" },
    content: { ru: "<p>Содержимое первого раздела.</p>", en: "<p>Content of section one.</p>" }
  }
];

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';

const nav = document.getElementById('nav');
const blocksList = document.getElementById('blocks-list');
const blockDetail = document.getElementById('block-detail');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const settingsToggleBtn = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const themeSelect = document.getElementById('theme-select');
const langSelect = document.getElementById('lang-select');
const closeSettingsBtn = document.getElementById('close-settings');

function renderNav() {
  nav.innerHTML = '';
  blocksData.forEach(block => {
    const btn = document.createElement('button');
    btn.textContent = block.title[currentLang];
    btn.onclick = () => showBlock(block.id);
    nav.appendChild(btn);
  });
}

function renderBlocksList(filter = '') {
  blocksList.innerHTML = '';
  const filtered = blocksData.filter(b =>
    b.title[currentLang].toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(block => {
    const div = document.createElement('div');
    div.textContent = block.title[currentLang];
    div.onclick = () => showBlock(block.id);
    blocksList.appendChild(div);
  });
}

function showBlock(id) {
  const block = blocksData.find(b => b.id === id);
  if (!block) return;
  blockDetail.innerHTML = `<h2>${block.title[currentLang]}</h2>${block.content[currentLang]}`;
  blockDetail.classList.remove('hidden');
  blocksList.classList.add('hidden');
  searchInput.value = '';
}

function showBlocksList() {
  blockDetail.classList.add('hidden');
  blocksList.classList.remove('hidden');
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);
  currentLang = lang;
  renderNav();
  renderBlocksList();
  showBlocksList();
}

searchInput.addEventListener('input', () => {
  renderBlocksList(searchInput.value);
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  renderBlocksList();
});

settingsToggleBtn.addEventListener('click', () => {
  settingsPanel.classList.remove('hidden');
  themeSelect.value = currentTheme;
  langSelect.value = currentLang;
});

closeSettingsBtn.addEventListener('click', () => {
  settingsPanel.classList.add('hidden');
});

themeSelect.addEventListener('change', (e) => {
  applyTheme(e.target.value);
});

langSelect.addEventListener('change', (e) => {
  applyLang(e.target.value);
});

window.onload = () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  renderNav();
  renderBlocksList();
};
