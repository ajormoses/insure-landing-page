const toggle = document.querySelector(".header-toggle");
const close = document.querySelector(".header-toggle-close");
const hamburger = document.querySelector(".header-toggle-hamburger");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});
