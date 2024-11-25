const openModal = document.getElementById("button-modal");
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal_close")
const singupToLogin = document.getElementById("ingresaLink")

openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');

})

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show')

})

singupToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show')
    modal.classList.add('modal--showa')

})


