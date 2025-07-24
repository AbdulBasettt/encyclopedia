document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const searchInput = document.getElementById('search');
  const favoritesList = document.getElementById('favorites-list');

  let items = [
    { title: 'Проверка суставов', tag: 'Здоровье' },
    { title: 'Интим по сунне', tag: 'Интим' },
    { title: 'Развитие харизмы', tag: 'Харизма' },
  ];

  function renderItems() {
    content.innerHTML = '';
    items.forEach(item => {
      const el = document.createElement('div');
      el.textContent = item.title + ' [' + item.tag + ']';
      const favBtn = document.createElement('button');
      favBtn.textContent = '⭐';
      favBtn.onclick = () => addToFavorites(item.title);
      el.appendChild(favBtn);
      content.appendChild(el);
    });
  }

  function filterContent() {
    const query = searchInput.value.toLowerCase();
    content.innerHTML = '';
    items.filter(item => item.title.toLowerCase().includes(query)).forEach(item => {
      const el = document.createElement('div');
      el.textContent = item.title + ' [' + item.tag + ']';
      const favBtn = document.createElement('button');
      favBtn.textContent = '⭐';
      favBtn.onclick = () => addToFavorites(item.title);
      el.appendChild(favBtn);
      content.appendChild(el);
    });
  }

  function addToFavorites(title) {
    let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favs.includes(title)) {
      favs.push(title);
      localStorage.setItem('favorites', JSON.stringify(favs));
      alert('Добавлено в избранное!');
      showFavorites();
    }
  }

  function showFavorites() {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    favoritesList.innerHTML = '';
    favs.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      favoritesList.appendChild(li);
    });
  }

  function loadSettings() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
      document.getElementById('darkMode').checked = true;
    }

    document.getElementById('interestHealth').checked = localStorage.getItem('interestHealth') === 'true';
    document.getElementById('interestIntimacy').checked = localStorage.getItem('interestIntimacy') === 'true';
    document.getElementById('interestCharisma').checked = localStorage.getItem('interestCharisma') === 'true';
  }

  function saveSettings() {
    localStorage.setItem('darkMode', document.getElementById('darkMode').checked);
    localStorage.setItem('interestHealth', document.getElementById('interestHealth').checked);
    localStorage.setItem('interestIntimacy', document.getElementById('interestIntimacy').checked);
    localStorage.setItem('interestCharisma', document.getElementById('interestCharisma').checked);
  }

  function resetSettings() {
    localStorage.clear();
    location.reload();
  }

  window.addEventListener('beforeunload', saveSettings);
  renderItems();
  loadSettings();

  // UI switching
  window.showSection = function(sectionId) {
    document.querySelectorAll('main section').forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'favorites') showFavorites();
  }
});