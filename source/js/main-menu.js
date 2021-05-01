const toggle = document.querySelector(".page-header__toggle");
const menu = document.querySelector(".site-menu");

toggle.classList.remove("page-header__toggle--hide");
menu.classList.add("site-menu--hide");

menuToggle();

function menuToggle() {
  toggle.addEventListener("click", function () {
    toggle.classList.toggle("page-header__toggle--close");
    menu.classList.toggle("site-menu--hide");
    if (toggle.classList.contains("page-header__toggle--close")) {
      toggle.ariaLabel = "закрыть меню"
    } else {
      toggle.ariaLabel = "открыть меню"
    }
  });
  {passive: true};
}
