const userEmailText = document.querySelector("#email");
const userPasswordText = document.querySelector("#password")
const buttonLogin = document.querySelector("#button-login")


buttonLogin.addEventListener("click", () => {
    const userEmail = userEmailText.value;  // Get the value from input field
   
    const userPassword = userPasswordText.value;  // Get the value from input field
   

    userEmailText.textContent = userEmail;
    userPasswordText.textContent = userPassword;

    localStorage.setItem("name", JSON.stringify(userEmail));
    sessionStorage.setItem("password", JSON.stringify(userPassword));
});



