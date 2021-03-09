/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const links = document.querySelectorAll('.menu a');
const overlay = document.querySelector('div.highlight');

function applyOverlay() {
  const coordinates = this.getBoundingClientRect();
  overlay.style.width = `${coordinates.width}px`;
  overlay.style.height = `${coordinates.height}px`;
  overlay.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px`;
}

links.forEach((a) => a.addEventListener('mouseover', applyOverlay));
