const openModal = document.getElementById("button-modal");
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal_close")
const modalLogin = document.getElementById("modal-2")
const closeModalLogin = document.getElementById("modal_close2")
const singupToLogin = document.getElementById("ingresaLink")
const loginToSingup = document.getElementById("registrarseLink")




openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');

})

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show')
})


closeModalLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modalLogin.classList.remove('modal--show')
})


singupToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show')
    modalLogin.classList.add('modal--show')
})

loginToSingup.addEventListener("click", (e) => {
    e.preventDefault();
    modalLogin.classList.remove('modal--show')
    modal.classList.add('modal--show')
})


