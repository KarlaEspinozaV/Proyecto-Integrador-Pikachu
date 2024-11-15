const regForm = document.getElementById("input-registro");
console.log(regForm);

let formUpdate = false; //Variable para validar que solo se ejecute unavez el codigo una vez pasadas las validaciones

regForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío automático del formulario
  console.log(event);

  //validación para que solo se ejecute una vez el codigo una vez pasadas las validaciones usando un valor boolean
  if (formUpdate) {
    console.log("Formulario ya enviado correctamente.");
    return;
  }

  // Obtener valores de los campos
  const nombreF = event.target.elements["nombreForm"].value.trim();
  const apellido = event.target.elements["apellido"].value.trim();
  const numTelefono = event.target.elements["telefon"].value.trim();
  const correo = event.target.elements["email"].value.trim();
  const contrasena = event.target.elements["contra"].value;
  //Pruebas para saber que si se está ejecutando
  console.log("name: ", nombreF);
  console.log("last-name: ", apellido);
  console.log("phone: ", numTelefono);
  console.log("email: ", correo);
  console.log("password: ", contrasena);

  //Validando validaciones
  const data = [...new FormData(regForm)];
  const dataObject = Object.fromEntries(data);
  if (
    validateUserName(dataObject) &&
    validateUserLastName(dataObject) &&
    validateUserPhone(dataObject) &&
    validateUserEmail(dataObject) &&
    validateUserPassword(dataObject)
  ) {
    showUserInfo(dataObject);
    //la variable lanza true y detiene la ejecución del codigo, si se vuelve a dar click en registrarse solo manda el console.log
    formUpdate = true;
  } else {
    showErrorAlert();
    return;
  }
});

//Mensaje cuando los datos pasan las validaciones
function showUserInfo(dataObject) {
  const alert = `
      <div class="alert alert-primary mt-2" role="alert">
        <p>¡Felicidades  ${dataObject.nombreForm} ${dataObject.apellido} ya eres parte de Pawfect Family!</p>
        <p>Tú correo de registro es:  ${dataObject.email}</p>
        
      </div>
  `;
  regForm.insertAdjacentHTML("afterend", alert);
}
//Alerta cuando algun dato no pasa las validaciones
function showErrorAlert() {
  const alert = `
      <div class="alert alert-danger mt-2" role="alert">
        <p>Algo salio mal</p>
      </div>
  `;
  regForm.insertAdjacentHTML("afterbegin", alert);
}

//Eliminar alerta de error al hacer clic en cualquier campo del formulario
const formFields = regForm.querySelectorAll("input");
formFields.forEach((field) => {
  field.addEventListener("click", () => {
    const alertContainer = regForm.querySelector(".alert-danger");
    if (alertContainer) {
      alertContainer.remove(); // Eliminar alerta de error
    }
  });
});

//Validación para el correo
function validateUserEmail(dataObject) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = regexEmail.test(dataObject.email);
  return isValidEmail;
}
//Validación para contraseña
function validateUserPassword(dataObject) {
  const regexPassword =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?[\]\/.,])(?!.*\s).{10,}$/;
  const isValidPassword = regexPassword.test(dataObject.contra);
  return isValidPassword;
}

//Validación para numero de telefono
function validateUserPhone(dataObject) {
  const regexPhone = /^\d{10}$/;
  const isValidPhone = regexPhone.test(dataObject.telefon);
  return isValidPhone;
}

//Validación para el nombre
function validateUserName(dataObject) {
  const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Regex que cree en chat gpt para aceptar letras con acento
  const isValidName = regexName.test(dataObject.nombreForm);
  return isValidName;
}

//Validación para el apellido
function validateUserLastName(dataObject) {
  const regexLastName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Regex que cree en chat gpt para aceptar letras con acento
  const isValidLastName = regexLastName.test(dataObject.apellido);
  return isValidLastName;
}

//falta que al pasar las validaciones el codigo se ejecute solo una vez, aunque se presione el boton registrarse nuevamente
