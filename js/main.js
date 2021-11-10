
const formGallery = document.forms.gallery;
const photosEl = document.querySelector('.photo_amount_sum');

formGallery.addEventListener('change', () => {

   const checkedPhotos = document.querySelectorAll('.photo_check_selected:checked');
   const sumPhotos = checkedPhotos.length;
   console.log(sumPhotos);

   photosEl.innerHTML = sumPhotos;
});
   
      
