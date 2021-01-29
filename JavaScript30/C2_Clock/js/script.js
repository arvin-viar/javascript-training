const hourHand = document.querySelector('.hand--hour');
const minuteHand = document.querySelector('.hand--minute');
const secondHand = document.querySelector('.hand--second');

const disableElementTransition = elm => {
    elm.style.transition = `none`;
}
const enableElementTransition = elm => {
    elm.style.transition = `all 0.3s ease`;
}
const moveClockHand = (h = 0, m = 0, s = 0) => {
    // Remove transition to avoid hand reverse animation
    if (s === 0) {
        disableElementTransition(secondHand);
        setTimeout(() => {
            enableElementTransition(secondHand);
        }, 1000);
    }
    if (m === 0) {
        disableElementTransition(minuteHand);
        setTimeout(() => {
            enableElementTransition(minuteHand);
        }, 1000);
    }
    if (h === 0 || h === 12) {
        disableElementTransition(hourHand);
        setTimeout(() => {
            enableElementTransition(hourHand);
        }, 1000);
    }

    const minPercentageCycle = (m/60) * 30; // additional deg for hour, base on minutes accumulated

    hourHand.style.transform = `rotate(${((h/12) * 360) + 90 + minPercentageCycle}deg)`;
    minuteHand.style.transform = `rotate(${((m/60) * 360) + 90}deg)`;
    secondHand.style.transform = `rotate(${((s/60) * 360) + 90}deg)`;
}

window.setInterval(() => {
    const now = new Date;
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hrs = now.getHours();
    moveClockHand(hrs, min, sec);
}, 1000);
