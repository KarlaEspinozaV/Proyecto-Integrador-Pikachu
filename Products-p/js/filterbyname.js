import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";
import { productController } from "./itemsController.js";

const myInput = document.getElementById("myinput");
const items = productController.getItems;

async function initializeProductFilter() {
  try {
    myInput.addEventListener("input", function () {
      const searchText = myInput.value.toLowerCase();

      // filtro de productos por nombre
      const filteredProducts = items.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      );

      //Crea tarjetas de productos filtrados por nombre
      crearTarjetasArticulosInicio(filteredProducts);
    });
  } catch (error) {
    console.log("Error al inicializar el filtro:", error);
  }
}

initializeProductFilter();
