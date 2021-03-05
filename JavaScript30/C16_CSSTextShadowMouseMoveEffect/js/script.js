/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 150;

function mouseMoved(e) {
  const heroW = hero.offsetWidth;
  const heroH = hero.offsetHeight;
  const offsetX = e.x;
  const offsetY = e.y;

  const xPos = Math.round((offsetX / heroW) * walk - walk / 2);
  const yPos = Math.round((offsetY / heroH) * walk - walk / 2);

  text.style.textShadow = `
    ${xPos}px ${yPos}px 0 blue,
    ${xPos * -1}px ${yPos}px 0 red,
    ${xPos}px ${yPos * -1}px 0 yellow,
    ${xPos * -1}px ${yPos * -1}px 0 green
  `;
}

hero.addEventListener('mousemove', mouseMoved);
