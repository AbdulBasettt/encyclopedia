const contentEl = document.getElementById("content");
const langSelect = document.getElementById("lang-select");
const themeBtn = document.getElementById("toggle-theme");

let lang = localStorage.getItem("lang") || "ru";
let theme = localStorage.getItem("theme") || "light";

langSelect.value = lang;
document.body.className = theme;

langSelect.addEventListener("change", () => {
  lang = langSelect.value;
  localStorage.setItem("lang", lang);
  loadLang();
});

themeBtn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  document.body.className = theme;
  localStorage.setItem("theme", theme);
});

async function loadContent() {
  const res = await fetch("data/content.json");
  const data = await res.json();
  contentEl.innerHTML = data.blocks.map(b => `<div><h2>${b.title}</h2><p>${b.desc}</p></div>`).join("");
}

async function loadLang() {
  const res = await fetch(`lang/${lang}.json`);
  const dict = await res.json();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

loadContent();
loadLang();