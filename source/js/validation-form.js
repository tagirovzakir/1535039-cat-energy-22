const input = document.querySelectorAll(".questionary__input");
const form = document.querySelector(".questionary");
const button = document.querySelector(".questionary__submit");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  input.forEach(el => {
    console.log(el);
    el.classList.remove("questionary__input--error");
  });
})
