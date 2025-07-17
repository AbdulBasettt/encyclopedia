// Пример базовой логики для поиска, избранного и настроек
const contentEl = document.getElementById('content');
const searchInput = document.getElementById('search');
const favoritesBtn = document.getElementById('favoritesBtn');
const settingsBtn = document.getElementById('settingsBtn');

let contentData = [
  {id: 1, title: 'Блок 1', text: 'Содержание блока 1'},
  {id: 2, title: 'Блок 2', text: 'Содержание блока 2'},
  {id: 3, title: 'Блок 3', text: 'Содержание блока 3'},
];

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');

function renderContent(items) {
  if (items.length === 0) {
    contentEl.innerHTML = '<p>Ничего не найдено</p>';
    return;
  }
  contentEl.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'block';
    div.innerHTML = `
      <h2>${item.title} <button data-id="${item.id}" class="favBtn">${favorites.includes(item.id) ? '★' : '☆'}</button></h2>
      <p>${item.text}</p>
    `;
    contentEl.appendChild(div);
  });

  // Назначаем обработчики для кнопок избранного
  document.querySelectorAll('.favBtn').forEach(btn => {
    btn.onclick = () => {
      const id = +btn.dataset.id;
      if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
      } else {
        favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      renderContent(items);
    };
  });
}

function showFavorites() {
  const favItems = contentData.filter(item => favorites.includes(item.id));
  renderContent(favItems);
}

function showAll() {
  renderContent(contentData);
}

function toggleDarkMode() {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

searchInput.oninput = () => {
  const query = searchInput.value.toLowerCase();
  const filtered = contentData.filter(item =>
    item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query)
  );
  renderContent(filtered);
};

favoritesBtn.onclick = () => {
  showFavorites();
};

settingsBtn.onclick = () => {
  toggleDarkMode();
};

// Инициализация
if (darkMode) document.body.classList.add('dark-mode');
showAll();

// Service Worker для оффлайн поддержки
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker зарегистрирован');
  });
}