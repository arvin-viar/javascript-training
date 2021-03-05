/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
const storedData = JSON.parse(localStorage.getItem('localItems')) || [];
console.log(storedData);

function renderItems(plates = [], container) {
  container.innerHTML = plates
    .map(
      (plate, i) => `<li>
        <input type="checkbox" data-idx=${i} id="item${i}" ${plate.status ? 'checked' : ''}/>
        <label for="item${i}">${plate.name}</label>
      </li>
    `
    )
    .join('');
  console.log(container);
}

function handleSubmit(e) {
  e.preventDefault();
  const itemName = e.target.querySelector('[name="item"]').value;
  const item = {
    name: itemName,
    status: true,
  };
  items.push(item);
  renderItems(items, itemsList);
  localStorage.setItem('localItems', JSON.stringify(items));
  e.target.reset();
}

renderItems(storedData, itemsList);

addItems.addEventListener('submit', handleSubmit);
