const content = document.getElementById("content");

const blocks = [
  { title: "Личная сила", description: "Как развивать харизму и уверенность." },
  { title: "Очищение тела", description: "Уход за телом и опрятность." },
  { title: "Интимные вопросы", description: "Как быть лучшим мужем по сунне." }
];

blocks.forEach(block => {
  const div = document.createElement("div");
  div.className = "block";
  div.innerHTML = `<h2>${block.title}</h2><p>${block.description}</p>`;
  content.appendChild(div);
});