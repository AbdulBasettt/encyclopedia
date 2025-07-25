function toggleSettings() {
  document.getElementById("settingsPanel").classList.toggle("hidden");
}

function applySettings() {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", theme === "dark");
  document.getElementById("themeSelect").value = theme;

  const lang = localStorage.getItem("lang") || "ru";
  document.getElementById("langSelect").value = lang;

  const volume = localStorage.getItem("volume") || 1;
  document.getElementById("volumeRange").value = volume;
}

document.getElementById("themeSelect").addEventListener("change", (e) => {
  const theme = e.target.value;
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
});

document.getElementById("langSelect").addEventListener("change", (e) => {
  localStorage.setItem("lang", e.target.value);
});

document.getElementById("volumeRange").addEventListener("input", (e) => {
  localStorage.setItem("volume", e.target.value);
});

applySettings();