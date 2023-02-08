"use strict"

let navigElements = document.getElementById("idnavbar");
let burgerElements = document.getElementById("idburger");
let navAnimation = document.querySelector(".burgBar");
let sideMenu = document.querySelector(".side-menu");

burgerElements.addEventListener("click", function () {
  navigElements.classList.toggle("visible");
  navAnimation.classList.toggle("activeBurgerBar");
  sideMenu.classList.toggle("active");
});

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");
  });
});


////fixed navbar-scroll-opacity-logic/////

var header = document.querySelector(".header-main");
var lastScroll = 0;

window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      header.classList.add("opacity-half");
    } else {
      header.classList.remove("opacity-half");
    }
    lastScroll = currentScroll;
});


