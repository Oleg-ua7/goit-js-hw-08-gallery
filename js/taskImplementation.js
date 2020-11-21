import galleryImg from './gallery-items.js';

const ref = {
  gallery: document.querySelector('.js-gallery'),
  lightBox: document.querySelector('.lightbox'),
  lightBoxButton: document.querySelector(
    '.lightbox button[data-action="close-lightbox"]',
  ),
  modalImg: document.querySelector('.lightbox__image'),
};

//********************************************************/

const renderGallery = ref.gallery.insertAdjacentHTML(
  'beforeend',
  galleryImg
    .map(
      ({ preview, description, original }) => `<li class='gallery__item'>
  <a
    class='gallery__link'
    href='${original}'
  >
    <img
      class='gallery__image'
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`,
    )
    .join(''),
);

// ************************************************

ref.gallery.addEventListener('click', galleryClick);
ref.lightBoxButton.addEventListener('click', closingModal);

// ***********************************************

function galleryClick(e) {
  e.preventDefault();
  const target = e.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  ref.modalImg.setAttribute('src', e.target.dataset.source);
  ref.modalImg.setAttribute('alt', e.target.alt);
  console.log(e.target.dataset.source);
  openModal();
}



function closingModal() {
  ref.lightBox.classList.toggle('is-open');
  ref.modalImg.setAttribute('src', '#');
  ref.modalImg.setAttribute('alt', '#');
}

function openModal() {
  ref.lightBox.classList.toggle('is-open');
}
