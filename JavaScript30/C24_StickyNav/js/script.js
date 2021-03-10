/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const navigation = document.querySelector('#main');
const navOffsetTop = navigation.offsetTop;

function stickyNav() {
  const windowScrollY = this.scrollY;
  if (navOffsetTop <= windowScrollY) {
    document.body.style.paddingTop = `${navigation.offsetHeight}px`;
    document.body.classList.add('nav-fixed');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('nav-fixed');
  }
}

window.addEventListener('scroll', stickyNav);
