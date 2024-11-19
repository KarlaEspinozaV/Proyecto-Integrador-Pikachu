const userEmailText = document.querySelector("#email");
const userPasswordText = document.querySelector("#password");
const buttonLogin = document.querySelector("#button-login");

function validatePassword() {
    let userPassword = document.getElementById('password').value;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).+$/;
    let messageElementInPassword = document.getElementById('messagePassword');

    if (regexPassword.test(userPassword) && userPassword.length > 9) {
        return true;
    } else {
        messageElementInPassword.textContent = 'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial además de ser mayor a 8 caracteres.';
        messageElementInPassword.style.color = 'red';
        return false;
    }
}

buttonLogin.addEventListener("click", (e) => {
    e.preventDefault()
    const userEmail = userEmailText.value;
    const userPassword = userPasswordText.value;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|live\.com|outlook\.com|[a-zA-Z0-9.-]+\.net|[a-zA-Z0-9.-]+\.org)$/;
    let messageElementInEmail = document.getElementById('messageEmail');

   
    if (regexEmail.test(userEmail) && validatePassword()) {
        localStorage.setItem("email", JSON.stringify(userEmail)); 
        localStorage.setItem("password", JSON.stringify(userPassword));   
    } else {
        messageElementInEmail.textContent = 'Introduce un correo electrónico válido.';
        messageElementInEmail.style.color = 'red';
        window.alert("Introduce un correo o contraseña validos")
        return; 
    }
});

