/* eslint-disable no-console */
import first, { returnHi as sayHi, last, middle } from './utils.js';
import { handleButtonClick } from './handlers.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);

console.log(sayHi('Arvin'));

console.log(first);
console.log(middle);
console.log(last);
