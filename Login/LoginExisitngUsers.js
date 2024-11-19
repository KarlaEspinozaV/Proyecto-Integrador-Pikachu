const userEmail1 = document.querySelector("#email");
const userPassword1 = document.querySelector("#password");
const buttonLogin1 = document.querySelector("#button-login");

buttonLogin1.addEventListener("click", () => {
    const userEmailLogIn = userEmail1.value;
    const userPasswordLogIn = userPassword1.value;
    const userEmailStoraged = localStorage.getItem('email');
    const userPasswordStoraged = localStorage.getItem('password');
    
    // Compara si los valores ingresados coinciden con los almacenados
    if (userEmailLogIn === userEmailStoraged && userPasswordLogIn === userPasswordStoraged) {
        window.alert("Correo electrónico o contraseña incorrectos.");
    } else {
        alert('¡Bienvenido de nuevo!');
    }
});
