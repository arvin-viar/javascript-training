/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('button');

let gameOver = false;
let points = 0;
let lastHole;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole() {
  const randomIndex = Math.floor(Math.random() * holes.length);
  if (lastHole === randomIndex) {
    randomHole();
  }
  lastHole = randomIndex;
  return holes[randomIndex];
}

function showMoles() {
  const time = randomTime(400, 900);
  const hole = randomHole();
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!gameOver) showMoles();
  }, time);
}

function startGame(e) {
  e.target.setAttribute('disabled', true);
  gameOver = false;
  points = 0;
  showMoles();
  setTimeout(() => {
    gameOver = true;
    e.target.removeAttribute('disabled');
  }, 10000);
}

function whack(e) {
  if (!e.isTrusted) return; // cheater!
  points++;
  e.target.parentElement.classList.remove('up');
  scoreBoard.textContent = points;
}

moles.forEach((mole) => mole.addEventListener('click', whack));
startBtn.addEventListener('click', startGame);
