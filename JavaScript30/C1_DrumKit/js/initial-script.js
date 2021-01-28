const drums = document.querySelectorAll('.drum__item');
const audios = document.querySelectorAll('.sounds audio');

const playAndToggleDrum = key => {
    drums.forEach(drum => {
        if (drum.dataset.key === key) {
            drum.classList.toggle('clicked');
            setTimeout(() => {
                drum.classList.remove('clicked');
            }, 500);
        }
    });
    audios.forEach(audio => {
        if (audio.dataset.key === key) {
            audio.load();
            audio.play();
        }
    });
}

// Apply Event Listener to Drum Item
drums.forEach(drum => {
    drum.addEventListener('click', event => {
        let dataKey;
        if (event.target.classList.contains('drum__item')) {
            dataKey = event.target.dataset.key;
        } else {
            dataKey = event.target.parentElement.dataset.key;
        }
        playAndToggleDrum(dataKey);
    });
});

// Key Press
document.onkeypress = function (event) {
    playAndToggleDrum(event.key);
};
