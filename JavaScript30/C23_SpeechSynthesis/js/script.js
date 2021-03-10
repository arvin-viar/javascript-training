/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('textarea').value;

function setVoiceOptions() {
  voices = this.getVoices();
  // console.log(voices);
  const voiceOptions = voices
    .filter((voice) => voice.lang.includes('en'))
    .map(
      (voice) => `
      <option value="${voice.name}">${voice.name} - ${voice.lang}</option>
    `
    )
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

function toggleSpeak(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function triggerVoiceSelected() {
  console.log(this.value);
  msg.voice = voices.find((voice) => voice.name === this.value);
  console.log(msg);
  toggleSpeak(true);
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggleSpeak(true);
}

speechSynthesis.addEventListener('voiceschanged', setVoiceOptions);
voicesDropdown.addEventListener('change', triggerVoiceSelected);
speakButton.addEventListener('click', toggleSpeak);
stopButton.addEventListener('click', () => toggleSpeak(false));
options.forEach((option) => option.addEventListener('change', setOption));
