import { confirmDelete } from "./editElement.js";
import { cancelEdit } from "./editElement.js";

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
  cancelEdit();
});

const modalEliminar = document.getElementById("modal-eliminar");
const confirmarEliminar = document.getElementById("deleteProductButton");
confirmarEliminar.addEventListener("click", (e) => {
  e.preventDefault();
  confirmDelete();
});

const closeDelete = document.getElementById( "closeDelete" );
closeDelete.addEventListener('click', (e) => {
  e.preventDefault();
  modalEliminar.classList.remove('modal--show');
});
