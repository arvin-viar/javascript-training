/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const keysPressed = [];
const secret = 'shake';
const elem = document.querySelector('p');

window.addEventListener('keypress', (e) => {
  keysPressed.push(e.key);
  keysPressed.splice(-secret.length - 1, keysPressed.length - secret.length);

  if (keysPressed.join('').includes('shake')) {
    elem.classList.add('shake');
    setTimeout(() => {
      elem.classList.remove('shake');
    }, 1000);
  }
});
