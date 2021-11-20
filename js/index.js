"use strict";

const linkArea = document.querySelector(".nav--link--area");
const toggleBtn = document.querySelector(".toggle--bars");
const nav = document.querySelector("nav");
const socialIcon = document.querySelectorAll(".social--icon");
const arrowDown = document.querySelector(".arrow--down");
const loading_page = document.querySelector(".loading");

window.addEventListener("load", function () {
  // REMOVE LOADING ANIMATION
  // loading_page.classList.toggle("loading--hide");

  // NAVIGATION TOGGLE
  toggleBtn.addEventListener("click", () => {
    linkArea.classList.toggle("show");
    nav.classList.toggle("overlay-nav");
    for (let icon of socialIcon) {
      icon.classList.toggle("social--icon--animate");
    }
  });

  anime({
    targets: arrowDown,
    translateY: ["-20px", "-5px"],
    opacity: ["1", "0"],
    easing: "easeInOutQuad",
    loop: true,
    duration: 2000,
  });
});
