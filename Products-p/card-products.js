import { productController } from "./js/itemsController.js";
import { crearTarjetasArticulosInicio } from "./js/crearTarjetasArticulosInicio.js";

const URL_JSON = "./Assets/articulos.json";

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(URL_JSON);
    if (!response.ok) throw new Error("Error al cargar los datos del JSON");

    const data = await response.json();
    const productsArray = data.articulos;

    productsArray.forEach((product) => {
      productController.addItem(
        product.name,
        product.description,
        product.precio,
        product.url
      );
    });

    crearTarjetasArticulosInicio(productController.getItems);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchAndDisplayProducts();

export { fetchAndDisplayProducts };
