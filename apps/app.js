const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".header__menu i");
const cross = document.querySelector(".nav i");

hamburger.addEventListener("click", () => {
  nav.style.display = "block";
});

cross.addEventListener("click", () => {
  nav.style.display = "none";
});
