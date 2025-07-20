
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      console.log('Service Worker registered.', reg);
    });
  });
}
document.getElementById('app').innerText = "Добро пожаловать в энциклопедию!";
