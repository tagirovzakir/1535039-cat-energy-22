const button = document.querySelector(".questionary__submit");
const inputRequired = document.querySelectorAll("input[required]");
const form = document.querySelector(".questionary");

button.addEventListener("click", function (evt) {
  let sum = 0;
  inputRequired.forEach(elem => {
    elem.classList.remove("questionary__input--error");
    if (!elem.validity.valid) {
      elem.classList.add("questionary__input--error");
      sum ++;
    }
  })
  console.log(sum);
  if (sum > 0) {
    evt.preventDefault();
  }
})


