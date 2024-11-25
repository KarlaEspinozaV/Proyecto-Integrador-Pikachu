const user= JSON.parse(localStorage.getItem("login_succes")) || false

if(!user ){
    window.location.href = home.html
}


const logOut = document.querySelector("#logout")

logOut.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Hasta pronto")
    localStorage.removeItem("login_succes")
    window.location.href = "home.html"

})