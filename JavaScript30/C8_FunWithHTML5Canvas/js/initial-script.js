/* eslint-disable no-console */
console.log('It works!');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = `#333333`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let x = 0;
let y = 0;
let isDrawing = false;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [x, y] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [x, y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
