const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songNameEl = document.getElementById('song-name');
const volumeSlider = document.getElementById('volume');


const playlist = [
  {name: "Blueberry Faygo", src: "music/Blueberry Faygo.mp3"},
  {name: "PIN PIN", src: "music/PIN PIN.mp3"},
  {name: "4 AM", src: "music/4 AMmp3"},
];

let currentSong = 0;


function loadSong(index) {
  audio.src = playlist[index].src;
  songNameEl.textContent = playlist[index].name; 
  audio.play().catch(() => {
    console.log("Autoplay bloqueado, espera interacción del usuario.");
  });
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}


playBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});


nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
});


prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong(currentSong);
});


audio.addEventListener('timeupdate', () => {
  const current = audio.currentTime;
  const duration = audio.duration || 0;
  progress.value = (current / duration) * 100;
  currentTimeEl.textContent = formatTime(current);
  durationEl.textContent = formatTime(duration);
});


progress.addEventListener('input', () => {
  const duration = audio.duration || 0;
  audio.currentTime = (progress.value / 100) * duration;
});


audio.addEventListener('ended', () => {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
});


function formatTime(sec){
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
}




const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0,0,0,0.8)';
overlay.style.color = '#fff';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.fontSize = '24px';
overlay.style.cursor = 'pointer';
overlay.style.zIndex = '9999';
overlay.innerText = 'click to view the web';
document.body.appendChild(overlay);


window.addEventListener('load', () => {
  audio.play().catch(() => {
    overlay.style.display = 'flex';
    overlay.addEventListener('click', () => {
      audio.play();
      overlay.style.display = 'none';
    }, { once: true });
  });
});


audio.volume = 0.1; 
volumeSlider.value = audio.volume * 100;


volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;
});


loadSong(currentSong);

document.addEventListener("DOMContentLoaded", function() {
  const anotherGamesLink = document.querySelector('.another-games');
  const esMovil = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (esMovil && anotherGamesLink) {
    anotherGamesLink.style.display = 'none';
  }
});