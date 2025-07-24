import './settings.js';
import './player.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("open-settings").addEventListener("click", () => {
    alert("Настройки пока не реализованы");
  });

  document.getElementById("content").textContent = "Добро пожаловать в энциклопедию!";
});