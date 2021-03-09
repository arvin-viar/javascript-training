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

function applyEmoji(text) {
  let newText = text;
  if (text.includes('unicorn')) {
    newText = newText.replace('unicorn', '🦄');
  }
  if (text.includes('apple')) {
    newText = newText.replace('apple', '🍎');
  }
  if (text.includes('bug')) {
    newText = newText.replace('bug', '🐛');
  }
  console.log(newText);
  return newText;
}

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  const text = applyEmoji(transcript);

  paragraph.textContent = text;
  if (e.results[0].isFinal) {
    paragraph = document.createElement('p');
    words.appendChild(paragraph);
  }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();
