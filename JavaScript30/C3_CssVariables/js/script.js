// Updated JavaScript

function inputChange () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', inputChange));
inputs.forEach(input => input.addEventListener('mousemove', inputChange));
