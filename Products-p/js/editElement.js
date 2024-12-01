import { productController } from "./itemsController.js";
import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";

function editarProducto(producto) {
  const productName = document.getElementById('productName');
  const description = document.getElementById('productDescription');
  const price = document.getElementById('productPrice');
  productName.value = producto.name;
  description.value = producto.description;
  price.value = producto.price;


  const modal = document.querySelector('.modal');
  modal.classList.add('modal--show');
  productController.setItemEdit = producto;
}

function cancelEdit() {
  const productName = document.getElementById('productName');
  const description = document.getElementById('productDescription');
  const price = document.getElementById('productPrice');
  // Limpiar el formulario después de agregar el producto
  productName.value = '';
  description.value = '';
  price.value = '';
  image.value = '';
}

function eliminarProducto(producto) {
  const modalEliminar = document.getElementById('modal-eliminar');
  modalEliminar.classList.add('modal--show');
  productController.setItemEdit = producto;
}

function confirmDelete() {
  if (productController.getItemEdit) {
    productController.deleteItem(productController.getItemEdit.id);
    crearTarjetasArticulosInicio(productController.getItems);
    productController.setItemEdit = undefined;

    const modalEliminar = document.getElementById('modal-eliminar');
    modalEliminar.classList.remove('modal--show');
  }
}

export { editarProducto, eliminarProducto , confirmDelete, cancelEdit};
