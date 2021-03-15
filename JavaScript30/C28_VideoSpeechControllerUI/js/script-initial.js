/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function speedMove(e) {
  const heightPercentage = Math.round((e.offsetY / speed.offsetHeight) * 100);
  bar.style.height = `${heightPercentage}%`;
  const min = 0.4;
  const max = 4;
  const playbackRate = (e.offsetY / speed.offsetHeight) * (max - min) + min;
  bar.textContent = `${playbackRate.toFixed(2)}X`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', speedMove);
