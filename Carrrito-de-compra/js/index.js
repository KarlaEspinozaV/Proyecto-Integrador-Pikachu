const contenedorTarjetas = document.getElementById("productos-container");
const myInput = document.getElementById("myinput");
const boxPrice = document.querySelectorAll("ul li button input");
const priceRange1 = document.getElementById("price-range-1");
const priceRange2 = document.getElementById("price-range-2");
const priceRange3 = document.getElementById("price-range-3");
const priceRange4 = document.getElementById("price-range-4");

function crearTarjetasArticulosInicio(productos) {
  // Limpiar el contenedor antes de agregar nuevas tarjetas
  contenedorTarjetas.innerHTML = ""; // Esto eliminará las tarjetas anteriores

  productos.forEach((producto) => {
    const nuevoArticulo = document.createElement("div");
    nuevoArticulo.classList = "tarjeta-producto";
    nuevoArticulo.innerHTML = `
        <img src="${producto.img}" alt="${producto.name}">
        <h3>${producto.name}</h3>
        <h5>$${producto.precio}</h5>
        <p>${producto.description}</p>
        <button id="button-tarjeta">Agregar al carrito</button>
        `;
    contenedorTarjetas.appendChild(nuevoArticulo);
    nuevoArticulo
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}

// Función para inicializar el filtro de búsqueda
function initializeProductFilter() {
  myInput.addEventListener("input", () => {
    const searchText = myInput.value.toLowerCase();
    console.log("escucho my input");

    // Filtra los productos según el texto ingresado
    const filteredProducts = articulos.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
    console.log("paso el filtro");

    // Renderiza las tarjetas filtradas
    crearTarjetasArticulosInicio(filteredProducts);
    console.log("creo las tarjetas");
  });
}

// Función para filtrar productos por rango de precios
function aplicarFiltroPorPrecio() {
  let filteredPrices = [];

  if (priceRange1.checked) {
    filteredPrices.push(
      ...articulos.filter(
        (articulo) => articulo.precio >= 50 && articulo.precio <= 100
      )
    );
  }
  if (priceRange2.checked) {
    filteredPrices.push(
      ...articulos.filter(
        (articulo) => articulo.precio >= 101 && articulo.precio <= 250
      )
    );
  }
  if (priceRange3.checked) {
    filteredPrices.push(
      ...articulos.filter(
        (articulo) => articulo.precio >= 251 && articulo.precio <= 500
      )
    );
  }
  if (priceRange4.checked) {
    filteredPrices.push(
      ...articulos.filter((articulo) => articulo.precio > 500)
    );
  }

  if (
    !priceRange1.checked &&
    !priceRange2.checked &&
    !priceRange3.checked &&
    !priceRange4.checked
  ) {
    filteredPrices = articulos;
  }

  crearTarjetasArticulosInicio(filteredPrices);
}

boxPrice.forEach((box) => {
  box.addEventListener("change", aplicarFiltroPorPrecio);
});

// Event listener para el botón "Limpiar"
const buttonLimpiar = document.getElementById("button0");
buttonLimpiar.addEventListener("click", () => {
  priceRange1.checked = false;
  priceRange2.checked = false;
  priceRange3.checked = false;
  priceRange4.checked = false;

  crearTarjetasArticulosInicio(articulos);
});

crearTarjetasArticulosInicio(articulos);
initializeProductFilter();
