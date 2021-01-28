/*
    Notes: Updated after watching wesbos tutorial
        1. I used event.key, to easily identify the key instead of event.keyCode
        2. I added click event to the drum item
        3. I convert key to lower case string to handle capital key
*/

// function to play sound
const playSound = key => {
    const audio = document.querySelector(`audio[data-key="${key.toLowerCase()}"]`);
    const drum = document.querySelector(`.drum__item[data-key="${key.toLowerCase()}"]`);
    // Return if no audio match
    if(!audio) return;
    // Play Audio
    audio.load();
    audio.play();
    // Element Transition
    drum.classList.add('clicked');
};

// Reset drum
function resetDrum(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

// Select all drum element
const drums = document.querySelectorAll('.drum__item');
// Catch transition end
drums.forEach(drum => drum.addEventListener('transitionend', resetDrum));

// Add eventListener click to drum element
drums.forEach(drum => {
    drum.addEventListener('click', event => {
        playSound(
            event.target.classList.contains('drum__item') ? 
            event.target.dataset.key : 
            event.target.parentElement.dataset.key
        );
    });
});

// Add eventListener to key
window.addEventListener('keydown', event => playSound(event.key));
