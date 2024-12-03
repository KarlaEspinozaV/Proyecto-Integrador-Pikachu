// const loginForm = document.querySelector("#loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password_login").value;

//   const users = JSON.parse(localStorage.getItem("users")) || [];
  
//   // Buscar al usuario con el email y la contraseña
//   const validUser = users.find(user => user.email === email && user.password === password);

//   if (!validUser) {
//     return alert("Usuario y/o contraseña incorrectos");
//   }

//   // Si el usuario es válido, muestra un mensaje y redirige
//   alert(`Bienvenido ${validUser.name}`);
//   localStorage.setItem("login_succes", JSON.stringify(validUser))
//   window.location.href = "home.html";
// });


const loginForm = document.querySelector("#loginForm");
async function fetchUser(email) {
	const url = `http://localhost:8080/api/users/email/${email}`;
	try {
		console.log("COMIENZO DE EJECUCION");
		let response = await fetch(url);
		console.log("response?", response);
		response = await response.json();
		return response;
	} catch (error) {
		console.log("cai a un error?");
		console.error("Error:", error); // Manejo de errores
	}
}

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const user = await fetchUser(email);

	console.log("llegue aca???", user);

	// JSON.parse(localStorage.getItem("users")) || [];

	// Buscar al usuario con el email y la contraseña
	const validUser = user.email === email && user.password === password;
  console.log("validacion" , validUser)
	if (!validUser) {
		return alert("Usuario y/o contraseña incorrectos");
	}

	// Si el usuario es válido, muestra un mensaje y redirige
	alert(`Bienvenido ${user.name}`);
	//localStorage.setItem("login_succes", user.name);
	//window.location.href = "cd.html";
});
