const contenedorTarjetas = document.getElementById("productos-container");
const myInput = document.getElementById("myinput");

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

// Inicializa la página cargando todos los artículos
crearTarjetasArticulosInicio(articulos);
initializeProductFilter();
