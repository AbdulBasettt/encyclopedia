// Настройки приложения
const settings = {
  theme: localStorage.getItem('theme') || 'light',
  fontSize: localStorage.getItem('fontSize') || 'medium',
  language: localStorage.getItem('language') || 'ru',
  save() {
    localStorage.setItem('theme', this.theme);
    localStorage.setItem('fontSize', this.fontSize);
    localStorage.setItem('language', this.language);
  },
  apply() {
    document.body.dataset.theme = this.theme;
    document.body.style.fontSize = this.fontSize === 'large' ? '18px' : this.fontSize === 'small' ? '12px' : '16px';
  }
};
settings.apply();