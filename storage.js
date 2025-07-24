let favorites = [];

function saveToFavorites(item) {
  if (!favorites.includes(item)) {
    favorites.push(item);
    alert('Добавлено в избранное: ' + item);
  }
}