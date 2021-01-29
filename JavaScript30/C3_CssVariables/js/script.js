console.log('it works!');

function inputChange (event) {
    if (event.target.name === 'inp-spacing') {
        img.style.transform = `translate(${event.target.value}px,${event.target.value}px)`;
    } else if (event.target.name === 'inp-blur') {
        img.style.filter = `blur(${event.target.value}px)`;
    } else if (event.target.name === 'inp-color') {
        imgWrap.style.backgroundColor = event.target.value;
    } else {
        console.log('Do nothing');
        return;
    }
}

const img = document.querySelector('img');
const imgWrap = document.querySelector('.css-var__content');

const inputs = document.querySelectorAll('input');
inputs.forEach(inp => inp.addEventListener('change', inputChange));
