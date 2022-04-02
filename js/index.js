"use strict";

const linkArea = document.querySelector(".nav--link--area");
const toggleBtn = document.querySelector(".toggle--bars");
const nav = document.querySelector("nav");
const socialIcon = document.querySelectorAll(".social--icon");
const loading_page = document.querySelector(".loading");
const btn_watch = document.querySelector(".section1--video--btn");
const video_box = document.querySelector(".popup--video video");
const video_overlay = document.querySelector(".video--overlay");
const copyBtn = document.querySelector(".email");
const email = document.querySelector(".email-txt");

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

  // AOS
  AOS.init();

});
