const URL_JSON = "./Assets/articulos.json";
const contenedorTarjetas = document.getElementById("productos-container");

async function fetchAndDisplayProducts() {
	try {
		const response = await fetch(URL_JSON);
		if (!response.ok) throw new Error("Error al cargar los datos del JSON");

		const data = await response.json();
		const productsArray = data.articulos;

		showAllProducts(productsArray);
	} catch (error) {
		console.log("Error:", error);
	}
}

function crearTarjetasArticulosInicio(productos) {
	productos.forEach((producto) => {
		const nuevoArticulo = document.createElement("div");
		nuevoArticulo.classList = "tarjeta-producto";
		nuevoArticulo.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.name}</h3>
        <h5>$${producto.precio}</h5>
        <p>${producto.description}</p>
        <button id = "button-tarjeta">Agregar al carrito</button>
        `;
		contenedorTarjetas.appendChild(nuevoArticulo);
	});
}

crearTarjetasArticulosInicio(articulos);

fetchAndDisplayProducts();
