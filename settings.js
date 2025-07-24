function saveSettings() {
    const theme = document.getElementById("theme").value;
    const language = document.getElementById("language").value;
    const volume = document.getElementById("volume").value;
    const tutorial = document.getElementById("tutorial").checked;

    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    localStorage.setItem("volume", volume);
    localStorage.setItem("tutorial", tutorial);

    alert("Настройки сохранены!");
}

function goBack() {
    window.location.href = "index.html";
}

// Применяем сохранённые значения
window.onload = () => {
    document.getElementById("theme").value = localStorage.getItem("theme") || "light";
    document.getElementById("language").value = localStorage.getItem("language") || "ru";
    document.getElementById("volume").value = localStorage.getItem("volume") || "0.5";
    document.getElementById("tutorial").checked = localStorage.getItem("tutorial") === "true";
};