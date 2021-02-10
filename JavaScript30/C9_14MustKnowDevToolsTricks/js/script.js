/* eslint-disable no-console */
/* eslint-disable no-plusplus */
console.log('it works!');
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

// Regular
console.log('hello world');

// Interpolated
console.log('This is just a %s.', 'test');

// Styled

// Warning
console.warn('This is a warning!');

// Error
console.error('Oooooopppppssss ERROR!');

// Info
console.info('This is a sample info.');

// Testing
console.assert(1 === 2, 'This is wrong!');

// Clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping Together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.table(data);
  });
