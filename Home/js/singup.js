const singupForm = document.querySelector("#loginForm")
singupForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password_singup").value
    //const phone = null;

    const user = {
      name: name,
      email: email,
      //phone : phone,
      password : password
    }


    const url = `http://localhost:8080/api`;

    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log('Guardado', data)
      })
      .catch(error => {
          console.error(error);
      })


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
