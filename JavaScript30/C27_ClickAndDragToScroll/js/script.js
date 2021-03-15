/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const itemsContainer = document.querySelector('.items');
let isGrabbed = false;
let xOrigin;
let scrollLeft;

function grab(e) {
  console.log('grabbed');
  this.classList.add('active');
  isGrabbed = true;
  xOrigin = e.pageX;
  scrollLeft = itemsContainer.scrollLeft;
}

function release() {
  console.log('released');
  this.classList.remove('active');
  isGrabbed = false;
}

function move(e) {
  if (!isGrabbed) return;
  e.preventDefault();
  console.log(itemsContainer.offsetLeft);
  const curentOffsetLeft = itemsContainer.offsetLeft;
  const movement = curentOffsetLeft + (e.x - xOrigin) * -1;
  itemsContainer.scrollLeft = scrollLeft + movement;
}

itemsContainer.addEventListener('mousedown', grab);
itemsContainer.addEventListener('mouseup', release);
itemsContainer.addEventListener('mouseleave', release);
itemsContainer.addEventListener('mousemove', move);
