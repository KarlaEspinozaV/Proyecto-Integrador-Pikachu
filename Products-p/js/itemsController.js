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

document.getElementById('addProductButton').addEventListener('click', async () => {
  const imageAsBase64Url = await encodeImageAsUrl(image.files[0]);

  prueba.addItem(productName.value, description.value, price.value, imageAsBase64Url);
  productName.value = '';
  description.value = '';
  price.value = '';
  image.value = '';
  console.log(prueba.getItems);

})

//Pruebas
console.log(prueba.addItem('Collar Reflectante para Perros', "Collar de seguridad para perros, ideal para paseos nocturnos con cinta reflectante de alta visibilidad.", 150, '/imgs/img1.png'));
console.log(prueba.addItem('Juguete Mordedor de Goma', "Juguete mordedor de goma resistente, perfecto para aliviar el estrés y mantener los dientes sanos.", 100 , "imgs/img2.png"));
console.log(prueba.addItem("Cama Ergonómica para Perros", "Juguete mordedor de goma resistente, perfecto para aliviar el estrés y mantener los dientes sanos.", 100 , "imgs/img2.png"));

console.log(prueba.updateItem(2,{name:'correa50', description:"cooraje3",price: 34 , img :"imagen5"}));
//console.log(prueba.deleteItem(2));
//console.log(prueba.clearItems());

console.log(prueba.getItems);
