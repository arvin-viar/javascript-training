/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const video = document.querySelector('video');
const playBtn = document.querySelector('button.btn--play');
const volumeRange = document.querySelector('input.input--volume');
const skipButtons = document.querySelectorAll('[data-skip]');
const progressFilled = document.querySelector('div.progess--filled');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateBtn() {
  const icon = video.paused ? '▶️' : '⏸';
  playBtn.textContent = icon;
}

function changeVolume() {
  video.volume = this.value;
}

function skipping() {
  if (video.play) {
    video.pause();
  }
  const { skip } = this.dataset;
  video.currentTime += parseFloat(skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

playBtn.addEventListener('click', togglePlay);

volumeRange.addEventListener('change', changeVolume);

skipButtons.forEach((buttons) => buttons.addEventListener('click', skipping));

video.addEventListener('timeupdate', handleProgress);
