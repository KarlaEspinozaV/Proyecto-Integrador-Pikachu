import { productController } from "./itemsController.js";
import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";

const items = productController.getItems;
console.log(items);

const priceRange1 = document.getElementById("price-range-1");
const priceRange2 = document.getElementById("price-range-2");
const priceRange3 = document.getElementById("price-range-3");
const priceRange4 = document.getElementById("price-range-4");

const boxPrice = document.querySelectorAll("ul li button input");
boxPrice.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (
      !priceRange1.checked &&
      !priceRange2.checked &&
      !priceRange3.checked &&
      !priceRange4.checked
    ) {
      crearTarjetasArticulosInicio(items);
      return;
    }

    let filteredPrices = [];
    if (priceRange1.checked) {
      items
        .filter((item) => item.price <= 100)
        .forEach((item) => filteredPrices.push(item));
    }
    if (priceRange2.checked) {
      items
        .filter((item) => item.price >= 101 && item.price <= 250)
        .forEach((item) => filteredPrices.push(item));
    }
    if (priceRange3.checked) {
      filteredPrices.push(
        ...items.filter((item) => item.price >= 251 && item.price <= 500)
      );
    }
    if (priceRange4.checked) {
      filteredPrices.push(...items.filter((item) => item.price >= 501));
    }
    console.log(filteredPrices);
    crearTarjetasArticulosInicio(filteredPrices);
  });
});

const buttonLimpiar = document.getElementById("button0");
buttonLimpiar.addEventListener("click", (e) => {
  crearTarjetasArticulosInicio(items);
  priceRange1.checked = false;
  priceRange2.checked = false;
  priceRange3.checked = false;
  priceRange4.checked = false;
});
