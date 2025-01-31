const modalConfirmAge = document.querySelector(".graph-modal");
const modalContainer = modalConfirmAge.querySelector(".graph-modal__container");
const btnConfirmAge = modalConfirmAge.querySelector(".js-btn");
const PROMPT_DELAY = 3000;

btnConfirmAge.addEventListener("click", closeModal);

if (localStorage.getItem("age") === null) {
  setTimeout(() => {
    modalConfirmAge.classList.add("is-open");
    modalContainer.style.display = "block";
  }, PROMPT_DELAY);
}

function closeModal() {
  modalConfirmAge.classList.remove("is-open");
  modalContainer.style.display = "none";
  saveAgeLocalStorage();
}

function saveAgeLocalStorage() {
  localStorage.setItem("age", "18");
}
