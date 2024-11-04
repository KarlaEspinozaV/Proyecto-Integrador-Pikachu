const URL_JSON = "./assets/articulos.json";
const mainContainer = document.querySelector(".container");

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

// Función para crear y mostrar las tarjetas de productos
function showAllProducts(productsArray) {
	productsArray.forEach((product) => {
		const cardProduct = `
			
				<div class="card col-md-4 col-lg-3 mb-2" id="card-product">
					<img src="${product.img}" class="card-img-top" alt="${product.name}">
					<div class="card-body">
						<h5 class="card-title">${product.name}</h5>
						<p class="card-text">${product.description}</p>
						<p class="card-price">Precio: ${product.precio}</p>
					</div>
				</div>
			
		`;

		// Inserta la tarjeta dentro de la fila
		mainContainer.insertAdjacentHTML("afterend", cardProduct);
	});
}

// Llamamos a la función para cargar y mostrar los productos
fetchAndDisplayProducts();
