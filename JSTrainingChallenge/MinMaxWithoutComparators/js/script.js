/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const resultText = document.querySelector('.result');
const numbersInput = document.querySelector('[name="numbers"]');
const minmaxBtn = document.querySelector('button');

const setCurrentMin = (currentMin, number) => {
  if (currentMin) {
    const difference = number - currentMin;
    return difference.toString().includes('-') ? number : currentMin;
  }
  return number;
};
const setCurrentMax = (currentMax, number) => {
  if (currentMax) {
    const difference = currentMax - number;
    return difference.toString().includes('-') ? number : currentMax;
  }
  return number;
};

function renderMinMax(data) {
  console.log(data);
  resultText.innerHTML = `
    <p>Min: ${data.min} --- Max: ${data.max}</p>
  `;
}

function minMax(numbers) {
  let currentMin = false;
  let currentMax = false;
  numbers.forEach(function (number) {
    currentMin = setCurrentMin(currentMin, number);
    currentMax = setCurrentMax(currentMax, number);
  });

  renderMinMax({
    min: currentMin,
    max: currentMax,
  });
}

function getMinMax() {
  const inputVal = numbersInput.value;
  const numberArr = inputVal.split(',');
  if (numberArr.length < 2) {
    console.log('please enter array of numbers');
  } else {
    minMax(numberArr);
  }
}

minmaxBtn.addEventListener('click', getMinMax);
