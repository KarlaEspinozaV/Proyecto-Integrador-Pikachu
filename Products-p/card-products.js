const URL_JSON = "./Assets/articulos.json";
const mainContainer = document.querySelector(".container-j .row");

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
		// Crear la columna de la tarjeta
		const col = document.createElement("div");
		col.classList.add("col");

		// Crear la tarjeta principal
		const card = document.createElement("div");
		card.classList.add("card");
		card.id = "product-card";
		card.style.width = "18rem";

		// Crear y configurar la imagen
		const img = document.createElement("img");
		img.classList.add("card-img-top");
		img.id = "img-product";
		img.src = product.url; // Aquí se usa la URL del JSON
		img.alt = product.name;

		// Crear el cuerpo de la tarjeta
		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		cardBody.id = "body-product";

		// Crear y configurar el título
		const title = document.createElement("h5");
		title.classList.add("card-title");
		title.id = "name";
		title.textContent = product.name;

		// Crear y configurar el precio
		const price = document.createElement("p");
		price.classList.add("card-text");
		price.id = "precio";
		price.textContent = product.precio;

		// Crear y configurar la descripción
		const description = document.createElement("p");
		description.classList.add("description");
		description.textContent = product.description;

		// Ensamblar los elementos dentro de la tarjeta
		cardBody.appendChild(title);
		cardBody.appendChild(price);
		cardBody.appendChild(description);
		card.appendChild(img); // Asegúrate de que aquí esté img
		card.appendChild(cardBody);
		col.appendChild(card);

		// Insertar la tarjeta completa en el contenedor principal
		mainContainer.appendChild(col);
	});
}

// Llamamos a la función para cargar y mostrar los productos
fetchAndDisplayProducts();
