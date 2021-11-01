"use strict";

const linkArea = document.querySelector(".nav--link--area");
const toggleBtn = document.querySelector(".toggle--bars");
const nav = document.querySelector("nav");
const smallNav = document.querySelector(".navigation--area");

window.addEventListener("load", function () {
  // NAVIGATION TOGGLE
  toggleBtn.addEventListener("click", () => {
    linkArea.classList.toggle("show");
    nav.classList.toggle("reset");
    smallNav.classList.toggle("reset--small");
  });
});
