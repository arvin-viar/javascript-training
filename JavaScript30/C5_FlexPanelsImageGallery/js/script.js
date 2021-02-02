const gallery = document.querySelector('.gallery');
const galleryItems = gallery.querySelectorAll('.gallery__item');

function toggleOpen () {
    this.classList.toggle('open');
}

function toggleActive (event) {
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('active');
    } 
}

galleryItems.forEach(galleryItem => galleryItem.addEventListener('click', toggleOpen));
galleryItems.forEach(galleryItem => galleryItem.addEventListener('transitionend', toggleActive));
