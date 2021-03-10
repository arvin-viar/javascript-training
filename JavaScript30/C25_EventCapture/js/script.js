/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('clicked!!!');
  },
  {
    once: true,
  }
);
