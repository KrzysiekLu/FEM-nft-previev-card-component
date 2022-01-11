const eye = document.querySelector(".eye-icon");
const overlay = document.querySelector(".overlay");

arr = [eye, overlay];

arr.forEach(function (el) {
  el.addEventListener("mouseover", function (e) {
    eye.style.opacity = "1";
    overlay.style.opacity = "0.5";
  });
});
arr.forEach(function (el) {
  el.addEventListener("mouseout", function (e) {
    eye.style.opacity = "0";
    overlay.style.opacity = "0";
  });
});
