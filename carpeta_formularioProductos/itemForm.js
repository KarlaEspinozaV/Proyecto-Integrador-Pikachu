import { ItemsController } from "./itemsController.js";
console.log("aaaa????", ItemsController);
// Inicializa un controlador de productos con currentId establecido en 0
const itemsController = new ItemsController(0);

// Selecciona el formulario de producto
const productForm = document.querySelector("#productForm");

// Selecciona el botón para agregar el producto
const addProductButton = document.querySelector("#addProductButton");

// Agrega un evento 'click' al botón de agregar producto
addProductButton.addEventListener("click", async (event) => {
	// Evita que se recargue la página si el formulario tiene un error
	event.preventDefault();

	// Selecciona los campos de entrada
	const productName = document.querySelector("#productName");
	const productPrice = document.querySelector("#productPrice");
	const productDescription = document.querySelector("#productDescription");
	const productImage = document.querySelector("#productImage");

	// Obtiene los valores de los campos de entrada
	const name = productName.value;
	const price = productPrice.value;
	const description = productDescription.value;
	const imageFile = productImage.files[0];

	// Convierte la imagen en una URL base64
	const imageUrl = await encodeImageAsUrl(imageFile);

	// ----------- VALIDACIONES

	// Función para validar el formulario
	function validateForm(name, price, description, imageFile) {
		// Validación de campos vacíos
		if (!name || !price || !description || !imageFile) {
			alert("Por favor, completa todos los campos.");
			return false;
		}

		// Validación de precio
		if (isNaN(price) || price <= 0) {
			alert("Por favor, ingresa un precio válido (mayor a 0).");
			return false;
		}

		// Validación del tamaño y formato de la imagen
		const validImageTypes = ["image/jpeg", "image/png"];
		if (!validImageTypes.includes(imageFile.type)) {
			alert("Por favor, sube una imagen en formato JPEG o PNG.");
			return false;
		}
		const maxSizeInMB = 1;
		if (imageFile.size > maxSizeInMB * 1024 * 1024) {
			alert(`La imagen debe ser menor a ${maxSizeInMB} MB.`);
			return false;
		}

		return true;
	}

	// Evento 'click' en el botón de agregar producto
	addProductButton.addEventListener("click", async (event) => {
		event.preventDefault();

		const productName = document.querySelector("#productName");
		const productPrice = document.querySelector("#productPrice");
		const productDescription = document.querySelector("#productDescription");
		const productImage = document.querySelector("#productImage");

		const name = productName.value.trim();
		const price = parseFloat(productPrice.value);
		const description = productDescription.value.trim();
		const imageFile = productImage.files[0];

		// Llamamos a la función de validación
		if (!validateForm(name, price, description, imageFile)) {
			return; // Si no pasa la validación, detenemos el proceso
		}

		const imageUrl = await encodeImageAsUrl(imageFile);

		itemsController.addItem(name, description, price, imageUrl);

		displayPreview(name, description, price, imageUrl);

		productName.value = "";
		productPrice.value = "";
		productDescription.value = "";
		productImage.value = "";
	});

	/////// -------- TERMINAN LAS VALIDACIONES --------------

	// Agrega el producto al controlador de productos
	itemsController.addItem(name, description, price, imageUrl);

	// Muestra la previsualización del producto
	displayPreview(name, description, price, imageUrl);

	// Limpia el formulario
	productName.value = "";
	productPrice.value = "";
	productDescription.value = "";
	productImage.value = "";
});

// Función para convertir la imagen a una URL base64
const encodeImageAsUrl = (img) => {
	return new Promise((resolve, reject) => {
		if (img) {
			const reader = new FileReader();
			reader.onload = function (e) {
				resolve(e.target.result);
			};
			reader.onerror = function (error) {
				reject(error);
			};
			reader.readAsDataURL(img);
		} else {
			resolve(null);
		}
	});
};
