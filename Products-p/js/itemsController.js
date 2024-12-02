class ProductsController {
  itemEdit;
  items;
  current_Id;

  constructor(currentId = 0) {
    this.itemEdit = undefined;
    this.items = [];
    this.current_Id = currentId;
  }

  set setItems(nuevoItems) {
    this.items = nuevoItems;
  }

  get getItems() {
    return this.items;
  }

  set setItemEdit(itemEdit) {
    this.itemEdit = itemEdit;
  }

  get getItemEdit() {
    return this.itemEdit;
  }

  async addItem(name, description, price, img) {
    const item = {
      id: ++this.current_Id,
      name,
      description,
      price,
      img,
      createdAt: new Date(),
    };

    this.items.push(item);
    const stringItems = JSON.stringify(this.items);
    localStorage.setItem("Items", stringItems);
  }

  updateItem(id, newData) {
    const index = this.items.findIndex((item) => item.id === id);
    const item = this.items[index];
    console.log(item);
    if (item) {
      item.name = newData.name || item.name;
      item.description = newData.description || item.description;
      item.price = newData.price || item.price;
      item.img = newData.img || item.img;

      console.log(item);

      this.items[index] = item;

      const stringItems = JSON.stringify(this.items);
      localStorage.setItem("Items", stringItems);
      return true;
    }
    return false;
  }

  deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);

      const stringItems = JSON.stringify(this.items);
      localStorage.setItem("Items", stringItems);
      return true;
    }
    return false;
  }

  clearItems() {
    this.items = [];

    const stringItems = JSON.stringify(this.items);
    localStorage.setItem("Items", stringItems);
  }

  loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("Items");
    if (storageItems) {
      const items = JSON.parse(storageItems);
      for (var i = 0, size = items.length; i < size; i++) {
        const item = items[i];
        this.items.push(item);
      }
    }
  }
}

const productController = new ProductsController();
export { productController };
