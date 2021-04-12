/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const peopleContainer = document.querySelector('.groupofpeople');
const purgeBtn = document.querySelector('.purge');
const resetBtn = document.querySelector('.reset');
const randomBtn = document.querySelector('.random');
let currentData = [];
let persons = [];

function arrangeCircular() {
  let type = 1,
    radius = 5,
    start = -90,
    items = Array.from(document.querySelectorAll('.person')),
    numberOfElements = (type === 1) ?  items.length : items.length - 1,
    slice = 360 * type / numberOfElements;

  radius = `${(items.length / 10) * radius}em`;
  
  items.forEach(function(el, i) {
      var rotate = slice * i + start,
          rotateReverse = rotate * -1;
      el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
}

function getDeathToll(people) {
  const isOdd = people.length % 2 !== 0;
  const data = [...people];
  const alive = data.filter((person, idx) => {
    return idx % 2 === 0;
  });
  const death = data.filter((person, idx) => {
    return idx % 2 === 1;
  });
  if (isOdd) {
    alive.shift();
    death.push(data[0]);
  }
  return {
    alive: alive,
    death: death
  };  
}

function animateDelay(param) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Resolved" + param)
    }, param);
  })
}

async function purge(people) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  let crowd = [...people];
  do {
    const toll = getDeathToll(crowd);
    crowd = toll.alive;
    const deadPeople = toll.death;

    if (crowd.length > 0) {
      const duration = deadPeople.length * 500;
      deadPeople.forEach(async (person, i) => {
        await animateDelay(i * 500);
        person.classList.add(`dead`);
      });
      await delay(duration);
    }
  } while (crowd.length > 1);
  crowd[0].classList.add('alive');
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
  arrangeCircular();
}

function randomData() {
  const randomNumber = Math.floor(Math.random() * 50);
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
