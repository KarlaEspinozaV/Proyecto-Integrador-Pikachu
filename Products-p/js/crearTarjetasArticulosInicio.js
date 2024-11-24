import {editarProducto } from "./editElement.js";

function crearTarjetasArticulosInicio(productos) {
  const contenedorTarjetas = document.getElementById("productos-container");
  contenedorTarjetas.innerHTML = "";
	productos.forEach((producto) => {
		const nuevoArticulo = document.createElement("div");
		nuevoArticulo.classList = "tarjeta-producto";
		nuevoArticulo.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.name}</h3>
        <h5>$${producto.price}</h5>
        <p>${producto.description}</p>
        <button class = "button-tarjeta-productos" id="editar-${producto.id}" >Editar</button>
        <button class = "button-tarjeta-productos" id="eliminar-${producto.id}">Eliminar</button>
        `;
		contenedorTarjetas.appendChild(nuevoArticulo);

    document.getElementById(`editar-${producto.id}`).addEventListener("click", (e) =>{
      e.preventDefault();
      editarProducto(producto.id);
    }
  );

	});
}

export { crearTarjetasArticulosInicio };
