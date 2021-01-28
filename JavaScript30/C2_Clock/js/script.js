const hour = document.querySelector('.hand--hour');
const minute = document.querySelector('.hand--minute');
const second = document.querySelector('.hand--second');

const moveClockHand = (h = 0, m = 0, s = 0) => {
    // additional deg for hour, base on minutes accumulated
    const minPer = m/60;
    const addHrsDeg = (5 * minPer) * 6;
    const hourStyle = {
        transform: `rotate(${((h * 5) * 6) + addHrsDeg + 90}deg)`
    }
    const minuteStyle = {
        transform: `rotate(${m * 6 + 90}deg)`
    }
    const secondStyle = {
        transform: `rotate(${s * 6 + 90}deg)`
    }
    Object.assign(hour.style, hourStyle);
    Object.assign(minute.style, minuteStyle);
    Object.assign(second.style, secondStyle);
}

window.setInterval(() => {
    const date = new Date;
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hrs = date.getHours();
    moveClockHand(hrs, min, sec);
}, 1000);
