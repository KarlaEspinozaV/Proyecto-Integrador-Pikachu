class ProductsController{
  items;
  current_Id;

  constructor(currentId = 0){
    this.items = [];
    this.current_Id = currentId;
  }

  set setItems(nuevoItems){
    this.items = nuevoItems;
  }

  get getItems() {
    return this.items;
  }

  async addItem(name, description, price, img){
    const item = {
      id: ++ this.current_Id,
      name,
      description,
      price,
      img,
      createdAt: new Date()
    };

    this.items.push(item);
    const stringItems = JSON.stringify(this.items);
    localStorage.setItem("Items",stringItems);
  }

  updateItem(id, newData) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.name = newData.name || item.name;
      item.description = newData.description || item.description;
      item.price = newData.price || item.price;
      item.img = newData.img || item.img;

      const stringItems = JSON.stringify(this.items);
      localStorage.setItem("Items",stringItems);
      return true;
    }
    return false;
  }

  deleteItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);

    const stringItems = JSON.stringify(this.items);
    localStorage.setItem("Items",stringItems);
      return true;
    }
    return false;
  }

  clearItems() {
    this.items = [];

    const stringItems = JSON.stringify(this.items);
    localStorage.setItem("Items",stringItems);
  }

  loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("Items")
    if (storageItems) {
        const items = JSON.parse(storageItems)
        for (var i = 0, size = items.length; i < size; i++) {
            const item = items[i];
            this.items.push(item);
        }
    }
}
}

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

const prueba = new ProductsController();

const productName = document.getElementById('productName');
const description = document.getElementById('productDescription');
const price = document.getElementById('productPrice');
const image = document.getElementById('productImage');
console.log(image);

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
		const validImageTypes = ["image/jpeg", "image/png"];
		if (!validImageTypes.includes(imageAsBase64Url.type)) {
      alert("Por favor, sube una imagen en formato JPEG o PNG.");
			return false;
		}
		const maxSizeInMB = 1;
		if (imageAsBase64Url.size > maxSizeInMB * 1024 * 1024) {
			alert(`La imagen debe ser menor a ${maxSizeInMB} MB.`);
			return false;
		}
    
		return true;
	}

  
  
  
  
  //Aquí terminan las validaciones
  

  document.getElementById('addProductButton').addEventListener('click', async () => {
    const imageAsBase64Url = await encodeImageAsUrl(image.files[0]);
  
    // Primero, valida el formulario antes de intentar agregar el producto
    if (!validateForm(productName.value, description.value, price.value, imageAsBase64Url)) {
      return; // Si no pasa la validación, detenemos el proceso
    }
  
    // Si la validación pasa, entonces se agrega el producto
    prueba.addItem(productName.value, description.value, price.value, imageAsBase64Url);
  
    // Limpiar el formulario después de agregar el producto
    productName.value = '';
    description.value = '';
    price.value = '';
    image.value = '';
  
    // Imprimir los productos después de agregar uno nuevo
    console.log(prueba.getItems);
  })
  
  
