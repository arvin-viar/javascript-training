/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const resultText = document.querySelector('.result');
const numbersInput = document.querySelector('[name="numbers"]');
const minmaxBtn = document.querySelector('button');

function renderMinMax(data) {
  resultText.innerHTML = `
    <p>Min: ${data.min} --- Max: ${data.max}</p>
  `;
}

const setMinMax = (currentMin, currentMax, number) => {
  const minDiff = number - currentMin;
  const maxDiff = currentMax - number;
  return {
    min: minDiff.toString().includes('-') ? number : currentMin,
    max: maxDiff.toString().includes('-') ? number : currentMax,
  };
};

function getMinMax() {
  const inputVal = numbersInput.value;
  const numberArr = inputVal.split(',');
  let currentMinMaxValue = {
    min: numberArr[0],
    max: numberArr[0],
  };
  numberArr.forEach(function (number) {
    currentMinMaxValue = setMinMax(currentMinMaxValue.min, currentMinMaxValue.max, number);
  });
  renderMinMax(currentMinMaxValue);
}

minmaxBtn.addEventListener('click', getMinMax);
