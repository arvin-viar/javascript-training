/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const itemsContainer = document.querySelector('.items');
let isGrabbed = false;
let xOrigin;
let scrollLeft;

function grab(e) {
  this.classList.add('active');
  isGrabbed = true;
  xOrigin = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
}

function release() {
  this.classList.remove('active');
  isGrabbed = false;
}

function move(e) {
  if (!isGrabbed) return;
  e.preventDefault();
  const curentOffsetLeft = e.pageX - itemsContainer.offsetLeft;
  const movement = (curentOffsetLeft - xOrigin) * 3; // curentOffsetLeft + (e.x - xOrigin) * -1;
  itemsContainer.scrollLeft = scrollLeft - movement;
}

itemsContainer.addEventListener('mousedown', grab);
itemsContainer.addEventListener('mouseup', release);
itemsContainer.addEventListener('mouseleave', release);
itemsContainer.addEventListener('mousemove', move);
