const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearTarjetasArticulosInicio() {
    contenedorTarjetas.innerHTML = ""; // Limpiar contenedor
    const productos = JSON.parse(localStorage.getItem("articulos"));
    console.log(productos);
    if (productos && productos.length > 0) {

        productos.forEach(producto => {
            const nuevoArticulo = document.createElement("div");
            nuevoArticulo.classList = "tarjeta-producto";
            nuevoArticulo.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.name}</h3>
                <h5>$${producto.precio}</h5>
                <p>${producto.description}</p>
                <p><strong>Color:</strong> ${producto.color}</p>
                <p><strong>Tamaño:</strong> ${producto.tamano}</p>
                <div>
                    <button id="button-tarjeta">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button id="button-tarjeta">+</button>
                </div>
            `;
            contenedorTarjetas.appendChild(nuevoArticulo);

            // Botón + (incrementar cantidad)
            nuevoArticulo.getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElement.innerText = agregarAlCarrito(producto); // Función que maneja agregar al carrito
                    actualizarTotales(); // Actualizar totales después de agregar
                });

            // Botón - (disminuir cantidad)
            nuevoArticulo.getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto); // Función que maneja la disminución de cantidad
                    crearTarjetasArticulosInicio(); // Vuelve a renderizar las tarjetas
                    actualizarTotales(); // Recalcular totales
                });
        });
    }
}

crearTarjetasArticulosInicio(); // Llamar la función para crear las tarjetas al inicio
actualizarTotales(); // Llamar para actualizar totales al cargar el carrito

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("articulos"));
    let unidades = 0;
    let precio = 0;

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad; // Sumar la cantidad de productos
            precio += producto.precio * producto.cantidad;  // Sumar el precio total de los productos
        });
        unidadesElement.innerText = unidades; // Mostrar la cantidad total de productos
        precioElement.innerText = precio; // Mostrar el precio total
    }
    revisarMensajeVacio(); // Verificar si el carrito está vacío
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("articulos"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0); // Ocultar mensaje si hay productos
    totalesElement.classList.toggle("escondido", !(productos && productos.length > 0)); // Mostrar totales si hay productos
}

revisarMensajeVacio(); // Llamar para verificar si el carrito está vacío al iniciar

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito); // Botón para reiniciar el carrito
function reiniciarCarrito() {
    localStorage.removeItem("articulos"); // Eliminar los productos del carrito
    actualizarTotales(); // Actualizar los totales (quedarán en 0)
    crearTarjetasArticulosInicio(); // Volver a renderizar las tarjetas del carrito
}
