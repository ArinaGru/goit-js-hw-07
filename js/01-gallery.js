import { galleryItems } from "./gallery-items.js";

const divGallery = document.querySelector(".gallery");
let instance;

function makeGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

divGallery.insertAdjacentHTML("beforeend", makeGallery(galleryItems));

function onClickImg(e) {
  e.preventDefault();
  if (e.target.dataset.source) {
    instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
      onShow: (instance) => window.addEventListener("keydown", onESCClose),
      onClose: (instance) => window.removeEventListener("keydown", onESCClose),
    });
    instance.show();
  }
}

function onESCClose(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
divGallery.addEventListener("click", onClickImg);
