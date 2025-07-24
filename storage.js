// Избранное
const favorites = {
  list: JSON.parse(localStorage.getItem('favorites') || '[]'),
  toggle(id) {
    if (this.list.includes(id)) {
      this.list = this.list.filter(x => x !== id);
    } else {
      this.list.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.list));
  },
  isFavorite(id) {
    return this.list.includes(id);
  }
};