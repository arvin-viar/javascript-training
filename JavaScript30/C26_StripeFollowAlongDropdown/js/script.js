/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const links = Array.from(document.querySelectorAll('ul.cool > li'));
const bgOverlay = document.querySelector('.dropdownBackground');

function displayDropdown() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

  const coordinates = this.getBoundingClientRect();
  const dropdown = this.querySelector('.dropdown');
  const ddCoords = dropdown.getBoundingClientRect();

  bgOverlay.style.width = `${ddCoords.width}px`;
  bgOverlay.style.height = `${ddCoords.height}px`;
  bgOverlay.style.transform = `translate(${ddCoords.left + window.scrollX}px, ${coordinates.height}px`;
  bgOverlay.classList.add('open');
}

function hideDropdown() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  bgOverlay.classList.remove('open');
}

links.forEach((link) => link.addEventListener('mouseenter', displayDropdown));
links.forEach((link) => link.addEventListener('mouseleave', hideDropdown));
