/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const images = document.querySelectorAll('.site-wrap img');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function onScroll() {
  images.forEach((image) => {
    const imageOffsetTop = image.offsetTop;
    const slideAt = imageOffsetTop + image.height;
    if (slideAt < window.scrollY + window.outerHeight) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(onScroll));
