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
        <button id = "button-tarjeta">Editar</button>
        <button id = "button-tarjeta">Eliminar</button>
        `;
		contenedorTarjetas.appendChild(nuevoArticulo);
	});
}

export { crearTarjetasArticulosInicio };
