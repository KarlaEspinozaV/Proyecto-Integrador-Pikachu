const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetasArticulosInicio(productos) {
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList = "tarjeta-producto";
        nuevoArticulo.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.name}</h3>
        <h5>$${producto.precio}</h5>
        <p>${producto.description}</p>
        <button id = "button-tarjeta">Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto));
    });
}

crearTarjetasArticulosInicio(articulos);