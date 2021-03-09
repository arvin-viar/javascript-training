/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let paragraph = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(paragraph);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  paragraph.textContent = transcript;
  if (e.results[0].isFinal) {
    paragraph = document.createElement('p');
    words.appendChild(paragraph);
  }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();
