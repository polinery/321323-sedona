document.body.classList.remove("no-js")
var open = document.querySelector(".open-form");
var popup = document.querySelector(".search-form");
open.addEventListener("click", function () {
  popup.classList.toggle("popup-hide");
  popup.classList.toggle("popup-show");
});
