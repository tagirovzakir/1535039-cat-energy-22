var mql = window.matchMedia('(max-width: 767px)');
const buttons = document.querySelectorAll(".buttons__button");
const slide = document.querySelector(".results__images");
const bar = document.querySelector(".results__bar");
const imageBox = document.querySelectorAll(".results__image-box");

function mobileSlider(e) {
  if (e.matches) {
    buttons[0].setAttribute("disabled", "disabled");
    buttons[1].removeAttribute("disabled");
    imageBox.forEach(el => el.classList.remove("results__image-box--hide"));

    buttons.forEach(button => {
      button.removeEventListener("click", bigSlide)
      button.addEventListener("click", minSlide)
    })
  } else {
    buttons[0].setAttribute("disabled", "disabled");
    buttons[1].removeAttribute("disabled");
    slide.classList.remove("results__images--after");
    bar.classList.remove("results__bar--after");
    imageBox[1].classList.add("results__image-box--hide");

    buttons.forEach(button => {
      button.removeEventListener("click", minSlide)
      button.addEventListener("click", bigSlide)
    })
  }
}

mql.addEventListener("change", mobileSlider);
mobileSlider(mql);

function minSlide() {
  buttons.forEach(b => {
    if (b.hasAttribute("disabled")) {
      b.removeAttribute("disabled")
    } else {
      b.setAttribute("disabled", "disabled")
    }
  })
  slide.classList.toggle("results__images--after");
  bar.classList.toggle("results__bar--after");
}

function bigSlide() {
  buttons.forEach(b => {
    if (b.hasAttribute("disabled")) {
      b.removeAttribute("disabled")
    } else {
      b.setAttribute("disabled", "disabled")
    }
  })
  imageBox.forEach(i => i.classList.toggle("results__image-box--hide"))
}
