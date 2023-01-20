import { galleryItems } from './gallery-items.js';
// Change code below this line


const containerRef = document.querySelector('.gallery');

containerRef.addEventListener('click', getOriginalUrl); 

function getOriginalUrl(event) {
  event.preventDefault();
  // if(event.target.nodeName !== "IMG") {
  //   return; 
  // }
if(!event.target.classList.contains('gallery__image')) {
  return;
}
openModalWindow(event); 
}

const createCardMarkup = createItemsList(galleryItems); 
console.log(createCardMarkup); 

containerRef.innerHTML = createCardMarkup;

function createItemsList(items) {
return items.map(item => 
`<a class="gallery__link" href="${item.original}">
<img
  class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  alt="${item.description}"
/>
</a>`).join('');
}

function openModalWindow(event) {
  const originalUrlImage = event.target.dataset.source; 

const instance = basicLightbox.create(`
    <img src="${originalUrlImage}" width="800" height="600">
`, {
  onShow: (instance) => document.body.addEventListener('keydown', onEscKeyPress),
  onClose: (instance) => document.body.removeEventListener('keydown', onEscKeyPress),
})

instance.show() 

function onEscKeyPress(event) {
if(event.code === "Escape") {
 instance.close();     
}
}
}



// 2 варіант 
// function openModalWindow(event) {
//   const originalUrlImage = event.target.dataset.source; 

//   const instance = basicLightbox.create(`
//   <div class="modal">
//   <img
//   src="${originalUrlImage}"
// />  
//   </div>
// `)
// instance.show();
// }





