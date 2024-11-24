import { productController } from "./itemsController.js";
import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";

function editarProducto(producto) {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal--show');
  productController.setItemEdit = producto;
}

export {editarProducto};
