/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');
const timeDurations = [...document.querySelectorAll('ul.videos li')];

const totalDuration = timeDurations
  .map((time) => {
    const timeString = time.dataset.time;
    const [minutes, seconds] = timeString.split(':');
    return parseFloat(minutes * 60) + parseFloat(seconds);
  })
  .reduce((sumSeconds, seconds) => sumSeconds + seconds);

console.log(totalDuration);

const hrs = Math.floor(totalDuration / 3600);
console.log('Hours: ', hrs);
let remainingTime = totalDuration % 3600;
const mins = Math.floor(remainingTime / 60);
console.log('Minutes: ', mins);
remainingTime %= 60;
console.log('Seconds: ', remainingTime);
