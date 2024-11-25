const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearTarjetasArticulosInicio() {
    contenedorTarjetas.innerHTML = "";
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
        <div>
            <p> talla: ${producto.talla} </p>
        </div>
        <div>
            <button id = "button-tarjeta">-</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button id = "button-tarjeta">+</button>
        </div>
        `
            contenedorTarjetas.appendChild(nuevoArticulo);
            nuevoArticulo
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e) => {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });
            nuevoArticulo.getElementsByTagName("button")[0]
            .addEventListener("click", (e) => {
                restarAlCarrito(producto)
                crearTarjetasArticulosInicio();
                actualizarTotales();
                });
        });
    }
}

crearTarjetasArticulosInicio();
actualizarTotales();

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("articulos"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    revisarMensajeVacio();
}

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("articulos"));
    carritoVacioElement.classList.toggle("escondido",productos && productos.length>0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length>0));
    
}
revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("articulos");
    actualizarTotales();
    crearTarjetasArticulosInicio();
}