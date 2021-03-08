/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');
const bandsList = document.querySelector('#bands');
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function renderList(data) {
  bandsList.innerHTML = data
    .map(
      (value) => `<li>
        <a href="#">${value}</a>
      </li>
    `
    )
    .join('');
}

function strip(name) {
  return name.replace(/(a |the |an )/i, '');
}

function sortArray(arr) {
  const sortedArray = arr.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
  renderList(sortedArray);
}

sortArray(bands);
