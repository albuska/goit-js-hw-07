import { galleryItems } from './gallery-items.js';
// Change code below this line


const containerRef = document.querySelector('.gallery');

const createGalleryList = createGalleryItem(galleryItems); 
containerRef.innerHTML = createGalleryList; 

function createGalleryItem(items) {
return items.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
    </a>`
    ).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {'captionDelay': 250});
    // lightbox =  $('.gallery a').simpleLightbox({'captionDelay': 250});





   







