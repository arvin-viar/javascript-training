/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
