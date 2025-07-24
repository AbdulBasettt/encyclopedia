// Универсальный аудио/видео плеер
function playMedia(file) {
  const url = URL.createObjectURL(file);
  const container = document.getElementById('player');
  container.innerHTML = '';

  if (file.type.startsWith('audio')) {
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = url;
    container.appendChild(audio);
    audio.play();
  } else if (file.type.startsWith('video')) {
    const video = document.createElement('video');
    video.controls = true;
    video.src = url;
    video.style.maxWidth = '100%';
    container.appendChild(video);
    video.play();
  }
}