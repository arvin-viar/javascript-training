const gallery = document.querySelector('.gallery');
const galleryItems = gallery.querySelectorAll('.gallery__item');

// Click Function
function openGalleryItem (event) {
    const galleryItem = event.currentTarget;
    galleryItems.forEach(galleryItem => galleryItem.classList.remove('open'));
    galleryItem.classList.add('open');
}

galleryItems.forEach(galleryItem => galleryItem.addEventListener('click', openGalleryItem));
