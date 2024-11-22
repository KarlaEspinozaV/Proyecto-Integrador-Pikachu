const openModal = document.querySelector('.add-product');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});




// document.addEventListener('DOMContentLoaded', () => {
//   const openModal = document.querySelector('.add-product');
//   const modal = document.querySelector('.modal');
//   const closeModal = document.querySelector('.modal_close');

//   if (openModal && modal && closeModal) {
//     openModal.addEventListener('click', (e) => {
//       e.preventDefault();
//       modal.classList.add('modal--show');
//     });

//     closeModal.addEventListener('click', (e) => {
//       e.preventDefault();
//       modal.classList.remove('modal--show');
//     });
//   }
// });
