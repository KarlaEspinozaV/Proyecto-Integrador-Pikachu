const URL_JSON = "../Products-p/Assets/articulos.json";
const searchInput = document.getElementById("search-input");
const resultList = document.getElementById("search-result-list");
let productsData = []; // Variable donde se almacena la info de los productos

async function fetchProducts() {
  try {
    const response = await fetch(URL_JSON);
    if (!response.ok) throw new Error("Error al cargar los datos del JSON");

    const data = await response.json();
    productsData = data.articulos;
    console.log("Productos cargados:", productsData);

    searchInput.addEventListener("input", handleSearch);
  } catch (error) {
    console.log("Error al cargar los productos", error);
  }
}

// Función para manejar la búsqueda
let handleSearch = () => {
  const searchItem = searchInput.value.toLowerCase();

  const filterProducts = productsData.filter((product) =>
    product.name.toLowerCase().startsWith(searchItem)
  );

  resultList.innerHTML = "";

  // Mostrar productos filtrados
  filterProducts.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name;
    resultList.appendChild(li);
  });
};

fetchProducts(); // Esto iniciará la carga de productos y luego configurará el evento
