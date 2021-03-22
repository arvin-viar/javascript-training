/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const peopleContainer = document.querySelector('.groupofpeople');
const purgeBtn = document.querySelector('.purge');
const resetBtn = document.querySelector('.reset');
const randomBtn = document.querySelector('.random');
let currentData = [];
let persons = [];

function kill(alive) {
  const isOdd = alive.length % 2 !== 0;
  const survivor = alive.filter((person, idx) => {
    if (idx % 2) {
      person.classList.add(`dead`);
    }
    return idx % 2 === 0;
  });
  if (isOdd) {
    survivor[0].classList.add(`dead`);
    survivor.shift();
  }
  return survivor;
}

async function purge(people) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  let remaining = [...people];
  do {
    remaining = kill(remaining);
    if (remaining.length > 1) {
      await delay(1000);
    }
  } while (remaining.length > 1);
  remaining[0].classList.add('alive');
}
function startPurge() {
  persons = Array.from(document.querySelectorAll('.person'));
  purge(persons);
}

function renderPeople(people) {
  peopleContainer.innerHTML = '';
  people.forEach((person) => {
    const item = document.createElement('div');
    item.classList.add('person');
    item.textContent = `${person}`;
    peopleContainer.appendChild(item);
  });
}

function randomData() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  const newData = [];
  if (randomNumber < 2) {
    randomData();
  } else {
    for (let x = 1; x <= randomNumber; x++) {
      newData.push(`${x}`);
    }
    currentData = newData;
    renderPeople(newData);
  }
}

function resetPeople() {
  renderPeople(currentData);
}

randomData();
purgeBtn.addEventListener('click', startPurge);
resetBtn.addEventListener('click', resetPeople);
randomBtn.addEventListener('click', randomData);
