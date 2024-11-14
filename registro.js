document.getElementById("input-registro").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío automático del formulario
    
    // Obtener valores de los campos
    const nombre = document.querySelector("#registro-nombre input").value.trim();
    const apellido = document.querySelectorAll("#registro-nombre input")[1].value.trim(); // Segundo campo de nombre es apellido
    const telefono = document.querySelector("#registro-num input").value.trim();
    const email = document.querySelector("#registro-correo input").value.trim();
    const password = document.querySelector("#registro-contrasena input").value.trim();
    const alertContainer = document.getElementById("registro-container");

    // Limpiar alertas anteriores
    alertContainer.innerHTML = "";

    // Validaciones
    let errores = [];

    // Validación de campos vacíos
    if (!nombre) errores.push("El campo de nombre es obligatorio.");
    if (!apellido) errores.push("El campo de apellido es obligatorio.");
    if (!telefono) errores.push("El campo de número de teléfono es obligatorio.");
    if (!email) errores.push("El campo de correo electrónico es obligatorio.");
    if (!password) errores.push("El campo de contraseña es obligatorio.");

    // Validación de teléfono (10 dígitos)
    const telefonoRegex = /^[0-9]{10}$/;
    if (telefono && !telefonoRegex.test(telefono)) {
        errores.push("El número de teléfono debe tener 10 dígitos.");
    }

    // Validación de email (nombre@ejemplo.com)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@ejemplo\.com/; 
    if (email && !emailRegex.test(email)) {
        errores.push("Por favor ingresa un correo electrónico válido en el formato nombre@ejemplo.com.");
    }

    // Mostrar errores en alertas de Bootstrap
    if (errores.length > 0) {
        errores.forEach(error => {
            const alerta = document.createElement("div");
            alerta.className = "alert alert-danger mt-2";
            alerta.textContent = error;
            alertContainer.appendChild(alerta);
        });
        return;
    }

    // Vaciar el formulario después de la validación
    document.getElementById("input-registro").reset();
});