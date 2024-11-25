const singupForm = document.querySelector("#loginForm")
singupForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password_singup").value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserregisteresd = Users.find(user => user.email === email)
    if(isUserregisteresd){
        return alert("El usuario ya esta registrado!")
    }

    Users.push({name : name, email : email, password : password})
    localStorage.setItem("users", JSON.stringify(Users))
    alert("Registro exitoso!")
    window.location.href = "home.html"
})