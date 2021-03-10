/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log('it works');

const navigation = document.querySelector('#main');
const navOffsetTop = navigation.offsetTop;

function stickyNav() {
  const windowScrollY = this.scrollY;
  if (navOffsetTop <= windowScrollY) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNav);
