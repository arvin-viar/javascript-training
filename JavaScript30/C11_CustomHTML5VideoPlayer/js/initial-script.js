/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const video = document.querySelector('video');
const playBtn = document.querySelector('button.btn--play');
const fastForwardBtn = document.querySelector('button.btn--fastforward');
const rewindBtn = document.querySelector('button.btn--rewind');
const volumeRange = document.querySelector('input.input--volume');

let isPlaying = false;

let intervalFwd;
let isFF = false;

let intervalRwd;
let isRewind = false;

function togglePlay() {
  if (isFF) {
    isFF = !isFF;
  }
  if (isRewind) {
    isRewind = !isRewind;
  }
  if (isPlaying) {
    video.pause();
  } else {
    clearInterval(intervalFwd);
    clearInterval(intervalRwd);
    video.play();
  }
  isPlaying = !isPlaying;
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function moveForward() {
  if (video.currentTime >= video.duration - 3) {
    clearInterval(intervalFwd);
    stopVideo();
  } else {
    video.currentTime += 3;
  }
}

function forward() {
  if (isRewind) {
    clearInterval(intervalRwd);
  }
  if (isPlaying) {
    video.pause();
    isPlaying = !isPlaying;
  }
  isFF = !isFF;
  if (isFF) {
    intervalFwd = setInterval(moveForward, 200);
  } else {
    clearInterval(intervalFwd);
  }
}

function moveBackward() {
  if (video.currentTime <= 3) {
    clearInterval(intervalRwd);
    stopVideo();
  } else {
    video.currentTime -= 3;
  }
}

function rewind() {
  if (isFF) {
    clearInterval(intervalFwd);
  }
  if (isPlaying) {
    video.pause();
    isPlaying = !isPlaying;
  }
  isRewind = !isRewind;
  if (isRewind) {
    intervalRwd = setInterval(moveBackward, 200);
  } else {
    clearInterval(intervalRwd);
  }
}

function changeVolume() {
  console.dir(this.value);
  video.volume = this.value;
}

playBtn.addEventListener('click', togglePlay);
fastForwardBtn.addEventListener('click', forward);
rewindBtn.addEventListener('click', rewind);
volumeRange.addEventListener('change', changeVolume);
