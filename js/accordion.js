"use strict"


const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");
  });
});
