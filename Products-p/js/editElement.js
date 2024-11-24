import { productController } from "./itemsController.js";
import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";




//productController.updateItem(id, newData)


function editarProducto(id) {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal--show');
}

export {editarProducto};
