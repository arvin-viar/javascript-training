/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

// const checkboxContainer = document.querySelector('.chkboxes');
const items = document.querySelectorAll('.chkboxes__list li');
console.log(items);

let isShiftPressed = false;
let indexFrom = null;
let indexTo = null;

function checkMultiple(start, end) {
  items.forEach((item, idx) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (start < end) {
      if (idx >= start && idx <= end) {
        checkbox.checked = true;
      }
    }
    if (start > end) {
      if (idx <= start && idx >= end) {
        checkbox.checked = true;
      }
    }
  });
}

function checkBoxClicked(e) {
  if (!isShiftPressed) return;
  const itemsArray = Array.from(items);
  if (indexFrom === null) {
    indexFrom = itemsArray.indexOf(e.target.parentElement);
  } else {
    indexTo = itemsArray.indexOf(e.target.parentElement);
    checkMultiple(indexFrom, indexTo);
  }
}

function keyPressedDown(e) {
  if (e.key === 'Shift') {
    isShiftPressed = true;
  }
}

items.forEach((item) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('click', checkBoxClicked);
});

document.addEventListener('keydown', keyPressedDown);
document.addEventListener('keyup', () => {
  isShiftPressed = false;
  indexFrom = null;
  indexTo = null;
});
