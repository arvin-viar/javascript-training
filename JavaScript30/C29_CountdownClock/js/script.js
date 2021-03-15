/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');
let countdown;
const time = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerBtns = document.querySelectorAll('.timer__button');
const timerForm = document.querySelector('#custom');

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remSecs = seconds % 60;
  time.textContent = `${minutes}:${remSecs < 10 ? `0${remSecs}` : remSecs}`;
}

function displayEndTime(seconds) {
  const now = Date.now();
  const end = new Date(now + seconds * 1000);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour % 12}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function timer(seconds) {
  let remainingSeconds = seconds;
  displayTime(seconds);
  displayEndTime(seconds);

  countdown = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      clearInterval(countdown);
    }
    displayTime(remainingSeconds);
  }, 1000);
}

function setTimer(e) {
  const seconds = e.target.dataset.time;
  clearInterval(countdown);
  timer(seconds);
}

timerBtns.forEach((btn) => btn.addEventListener('click', setTimer));
timerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInterval(countdown);
  const minutes = e.target.querySelector('input').value;
  const seconds = minutes * 60;
  timer(seconds);
});
