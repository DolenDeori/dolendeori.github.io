"use strict";

const linkArea = document.querySelector(".nav--link--area");
const toggleBtn = document.querySelector(".toggle--bars");
const nav = document.querySelector("nav");
const socialIcon = document.querySelectorAll(".social--icon");
const loading_page = document.querySelector(".loading");
const btn_watch = document.querySelector(".section1--video--btn");
const video_box = document.querySelector(".popup--video video");
const video_overlay = document.querySelector(".video--overlay");

window.addEventListener("load", function () {
  // REMOVE LOADING ANIMATION
  loading_page.classList.toggle("loading--hide");

  const toggleNav = function () {
    linkArea.classList.toggle("show");
    nav.classList.toggle("overlay-nav");
    for (let icon of socialIcon) {
      icon.classList.toggle("social--icon--animate");
    }
  };
  // NAVIGATION TOGGLE
  toggleBtn.addEventListener("click", toggleNav);

  //INTRO VIDEO
  btn_watch.addEventListener("click", () => {
    video_box.classList.remove("hide--video");
    video_box.classList.add("show--video");
    video_overlay.classList.toggle("show--overlay");
  });
  video_overlay.addEventListener("click", () => {
    video_box.classList.remove("show--video");
    video_box.classList.add("hide--video");
    video_overlay.classList.toggle("show--overlay");
  });

  // AOS
  AOS.init();

  //RELAX JS
  let rellax = new Rellax(".rellax");
});
