import { productController } from "./itemsController.js";
import { crearTarjetasArticulosInicio } from "./crearTarjetasArticulosInicio.js";

const productName = document.getElementById('productName');
const description = document.getElementById('productDescription');
const price = document.getElementById('productPrice');
const image = document.getElementById('productImage');
console.log(image);

document.getElementById('addProductButton').addEventListener('click', async () => {
  const imageAsBase64Url = await encodeImageAsUrl(image.files[0]);

  // Primero, valida el formulario antes de intentar agregar el producto
  if (!validateForm(productName.value, description.value, price.value, imageAsBase64Url)) {
    return; // Si no pasa la validación, detenemos el proceso
  }

  // Si la validación pasa, entonces se agrega el producto
  if (productController.getItemEdit) {
    console.log("modo editar");
    console.log(productController.getItemEdit);
    //const isSaved =
    productController.updateItem(productController.getItemEdit.id,
      {
        id: productController.getItemEdit.id,
        name: productName.value,
        description: description.value,
        price: price.value,
        img: imageAsBase64Url
      }
    );
    productController.setItemEdit = undefined;
  } else {
    await productController.addItem(productName.value, description.value, price.value, imageAsBase64Url);
  }

  crearTarjetasArticulosInicio(productController.getItems);

  // Limpiar el formulario después de agregar el producto
  productName.value = '';
  description.value = '';
  price.value = '';
  image.value = '';

  const modal = document.querySelector('.modal');
  modal.classList.remove('modal--show');

  // Imprimir los productos después de agregar uno nuevo
  console.log(productController.getItems);
});

const encodeImageAsUrl = (img) => {
  return new Promise((resolve, reject) => {
    if (img) {
      const reader = new FileReader();
      reader.onload = function(e) {
        resolve(e.target.result);
      };
      reader.onerror = function(error) {
        reject(error);
      };
      reader.readAsDataURL(img);
    } else {
      resolve(null);
    }
  });
};

//Aquí inician las validaciones

// Función para validar el formulario
function validateForm(productName, description, price, imageAsBase64Url) {
  // Validación de campos vacíos
  if (!productName || !price || !description || !imageAsBase64Url) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Validación de precio
  if (isNaN(price) || price <= 0) {
    alert("Por favor, ingresa un precio válido (mayor a 0).");
			return false;
		}

		// Validación del tamaño y formato de la imagen
		// const validImageTypes = ["image/jpeg", "image/png"];
		// if (!validImageTypes.includes(imageAsBase64Url.type)) {
    //   alert("Por favor, sube una imagen en formato JPEG o PNG.");
		// 	return false;
		// }
		// const maxSizeInMB = 1;
		// if (imageAsBase64Url.size > maxSizeInMB * 1024 * 1024) {
		// 	alert(`La imagen debe ser menor a ${maxSizeInMB} MB.`);
		// 	return false;
		// }

		return true;
	}

  //Aquí terminan las validaciones
