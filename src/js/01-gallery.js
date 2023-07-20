// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const listGallery = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
<a href="${original}" class="gallery__link">
<img src="${preview}" alt="${description}" class="gallery_image">
</a></li>
`).join('');

gallery.insertAdjacentHTML('afterbegin', listGallery);
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
console.log(galleryItems);