/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const btnCheckAll = document.querySelector('.btn-checkall');
const btnUncheckAll = document.querySelector('.btn-uncheckall');
const btnClear = document.querySelector('.btn-clear');
const items = JSON.parse(localStorage.getItem('localItems')) || [];

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
}

function handleSubmit(e) {
  e.preventDefault();
  const itemName = this.querySelector('[name="item"]').value;
  const item = {
    name: itemName,
    status: false,
  };
  items.push(item);
  renderItems(items, itemsList);
  localStorage.setItem('localItems', JSON.stringify(items));
  this.reset();
}

function toggleChkbox(e) {
  // eslint-disable-next-line no-useless-return
  if (!e.target.matches('input')) return;

  const el = e.target;
  const index = el.dataset.idx;
  items[index].status = !items[index].status;
  localStorage.setItem('localItems', JSON.stringify(items));
  renderItems(items, itemsList);
}

addItems.addEventListener('submit', handleSubmit);
itemsList.addEventListener('click', toggleChkbox);

function clearArray(arr) {
  return (arr.length = 0);
}

function toggleCheck(e) {
  const isChecked = e.target.dataset.ischecked === 'true';
  const newItems = items.map((item) => ({
    name: item.name,
    status: isChecked,
  }));
  clearArray(items);
  newItems.forEach((data) => {
    items.push(data);
  });
  renderItems(items, itemsList);
  localStorage.setItem('localItems', JSON.stringify(newItems));
}

function clearList() {
  console.log('Clear List');
  clearArray(items);
  renderItems(items, itemsList);
  localStorage.setItem('localItems', JSON.stringify(items));
}

// Wesbos Challenge
btnCheckAll.addEventListener('click', toggleCheck);
btnUncheckAll.addEventListener('click', toggleCheck);
btnClear.addEventListener('click', clearList);

renderItems(items, itemsList);
