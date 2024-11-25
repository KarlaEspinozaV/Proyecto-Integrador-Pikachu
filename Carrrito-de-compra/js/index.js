const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasArticulosInicio(productos) {
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList = "tarjeta-producto";

        // Creamos las opciones de color y tamaño
        let coloresOptions = producto.colores.map(color => `<option value="${color}">${color}</option>`).join('');
        let tamanosOptions = producto.tamanos.map(tamano => `<option value="${tamano}">${tamano}</option>`).join('');

        nuevoArticulo.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.name}</h3>
            <h5>$${producto.precio}</h5>
            <p>${producto.description}</p>
            <label for="color">Color:</label>
            <select id="color">${coloresOptions}</select>
            <label for="tamano">Tamaño:</label>
            <select id="tamano">${tamanosOptions}</select>
            <button id="button-tarjeta">Agregar al carrito</button>
        `;

        contenedorTarjetas.appendChild(nuevoArticulo);

        // Agregar event listener al botón de agregar al carrito
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click", () => {
            const selectedColor = nuevoArticulo.querySelector("#color").value;
            const selectedTamano = nuevoArticulo.querySelector("#tamano").value;

            const productoConOpciones = {
                ...producto,
                color: selectedColor,
                tamano: selectedTamano
            };

            agregarAlCarrito(productoConOpciones);  // Pasamos el producto con sus opciones seleccionadas
        });
    });
}

crearTarjetasArticulosInicio(articulos);
