/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function speedMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = `${Math.round(percent * 100)}%`;
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(2)}X`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', speedMove);
