const userEmailText = document.querySelector("#email");
const userPasswordText = document.querySelector("#password");
const buttonLogin = document.querySelector("#button-login");
const singUpForm = document.querySelector("#singup_form")

singUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userName = document.querySelector("#username")
    const userEmail = document.querySelector("#email")
    const userPassword = document.querySelector("#password")


    const users =JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = users.find(users => users.mail === userEmail);
        if (isUserRegistered){
            return window.alert("El usuario ya esta registrado")
        }else
    
        users.push({name: userName, mail: userEmail, password: userPassword  })
        localStorage.setItem('users', JSON.stringify(users))
        alert("Registro exitoso")
        window.location.href="index.html"

})


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
        alert("Registro exitoso")
        window.location.href = "Login\index.html"   
    } else {
        messageElementInEmail.textContent = 'Introduce un correo electrónico válido.';
        messageElementInEmail.style.color = 'red';
        
        return; 
    }
});


