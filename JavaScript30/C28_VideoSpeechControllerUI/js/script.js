/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function speedMove(e) {
  console.log(e.offsetY, speed.offsetHeight);
  const heightPercentage = Math.round((e.offsetY / speed.offsetHeight) * 100);
  console.log(heightPercentage);
  bar.style.height = `${heightPercentage}%`;
  const min = 0.4;
  const max = 4;
  const playbackRate = (e.offsetY / speed.offsetHeight) * (max - min) + min;
  console.log(playbackRate);
  bar.textContent = `${playbackRate.toFixed(2)}X`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', speedMove);
