"use strict";

const linkArea = document.querySelector(".nav--link--area");
const toggleBtn = document.querySelector(".toggle--bars");

window.addEventListener("load", function () {
  // NAVIGATION TOGGLE
  toggleBtn.addEventListener("click", () => {
    linkArea.classList.toggle("show");
  });
});
