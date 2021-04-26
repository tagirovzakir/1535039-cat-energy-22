const before = document.querySelector(".buttons__button--before");
const after = document.querySelector(".buttons__button--after");
const slide = document.querySelector(".results__images");
const bar = document.querySelector(".results__bar");

after.addEventListener("click", function (evt) {
  evt.preventDefault();
  before.removeAttribute("disabled");
  after.setAttribute("disabled", "disabled");
  slide.classList.toggle("results__images--after");
  bar.classList.add("results__bar--after");
})

before.addEventListener("click", function (evt) {
  evt.preventDefault();
  after.removeAttribute("disabled");
  before.setAttribute("disabled", "disabled");
  slide.classList.toggle("results__images--after");
  bar.classList.remove("results__bar--after");
})

