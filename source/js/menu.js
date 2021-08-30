const burger = document.querySelector(".header__body-burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", onButtonClick);

function onButtonClick(e) {
  burger.classList.toggle("header__body-burger--close-on-mobile");
  burger.classList.toggle("header__body-burger--open-on-mobile");
  menu.classList.toggle("header__menu--close-on-mobile");
  menu.classList.toggle("header__menu--open-on-mobile");
}

function initMenu() {
  burger.classList.add("header__body-burger--close-on-mobile");
  menu.classList.add("header__menu--close-on-mobile");
}

initMenu();