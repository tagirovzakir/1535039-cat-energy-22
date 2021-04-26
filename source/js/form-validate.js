const button = document.querySelector(".questionary__submit");
const inputRequired = document.querySelectorAll("input[required]");
const form = document.querySelector(".questionary");

button.addEventListener("click", function (evt) {
  let errors = [];
  inputRequired.forEach(elem => {
    elem.classList.remove("questionary__input--error");
    if (!elem.validity.valid) {
      errors.push(elem);
      elem.classList.add("questionary__input--error");
    }
  })
  if (errors.length > 0) {
    evt.preventDefault();
    scrollTo({left: 0, top: coords(errors[0]), behavior: "smooth"})
  }
})

function coords(elem) {
  let error = elem.getBoundingClientRect();
  error.y += pageYOffset;
  return error.y - 10;
}
