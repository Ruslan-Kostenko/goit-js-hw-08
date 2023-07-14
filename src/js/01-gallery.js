// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const galleryListEl = document.querySelector('.gallery');
document.addEventListener('DOMContentLoaded', onItemClick);

function onItemClick(event) {
    event.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionsDelay: 250,
        enableKeyboard: true,
    });
};


const listItemsGallery = createlistItemsGallery(galleryItems);

function createlistItemsGallery(items) {
    return items
        .map(item => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
        </a> </li>`)
        .join('');
};
galleryListEl.insertAdjacentHTML("beforeend", listItemsGallery);
galleryListEl.style.listStyle = 'none';