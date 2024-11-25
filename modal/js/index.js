const user= JSON.parse(localStorage.getItem("login_succes")) || false
if(!user){
    window.location.href = cd.html
}


const logOut = document.querySelector("#logout")

logOut.addEventListener("click", (e) => {
    alert("Hasta pronto")
    localStorage.removeItem("login_succes")
    window.location.href = "cd.html"

})