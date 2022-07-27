import { galleryItems } from "./gallery-items.js";

const divGallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  />
        </a>
        `;
    })
    .join("");
}

divGallery.innerHTML = createGalleryMarkup(galleryItems);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
