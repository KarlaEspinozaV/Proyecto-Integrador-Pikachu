function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    console.log(memoria);
    let cuenta = 0;
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("articulos", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();  // Actualiza el contador después de agregar al carrito
    return cuenta;
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
    } else {
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("articulos", JSON.stringify(memoria));
    actualizarNumeroCarrito();  // Actualiza el contador después de restar del carrito
}

/* Toma un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    if (memoria && memoria.length > 0) {
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
        cuentaCarritoElement.innerText = cuenta;  // Actualiza el texto con el total de artículos
    } else {
        cuentaCarritoElement.innerText = 0;  // Si no hay productos, muestra 0
    }
}

// Llama la función de inmediato para que el contador se actualice al cargar la página
actualizarNumeroCarrito();

const cuentaCarritoResponsiveElement = document.getElementById("cuenta-carrito-responsive");

function actualizarNumeroCarritoResponsive() {
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    if (memoria && memoria.length > 0) {
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
        cuentaCarritoResponsiveElement.innerText = cuenta;  // Actualiza el contador en la vista responsive
    } else {
        cuentaCarritoResponsiveElement.innerText = 0;  // Si no hay productos, muestra 0
    }
}

// Llama la función para actualizar el contador en vista responsive
actualizarNumeroCarritoResponsive();
