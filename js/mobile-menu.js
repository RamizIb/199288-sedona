var openBtn = document.querySelector(".button--open");
var header = document.querySelector(".header");
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross");

header.classList.remove("open");
openBtn.classList.remove("top");
burger.classList.remove("hidden");

openBtn.addEventListener("click", function() {
 header.classList.add("open");
 openBtn.classList.add("top");
 burger.classList.add("hidden");
 cross.classList.remove("hidden");
});
