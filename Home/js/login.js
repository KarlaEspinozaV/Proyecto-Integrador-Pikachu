const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password_login").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Buscar al usuario con el email y la contraseña
  const validUser = users.find(user => user.email === email && user.password === password);

  if (!validUser) {
    return alert("Usuario y/o contraseña incorrectos");
  }

  // Si el usuario es válido, muestra un mensaje y redirige
  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem("login_succes", JSON.stringify(validUser))
  window.location.href = "home.html";
});
