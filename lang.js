function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";
  document.body.className = theme;
}

function applyLanguage() {
  const lang = localStorage.getItem("lang") || "ru";
  fetch(lang + ".json")
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) el.innerText = data[key];
      });
    });
}