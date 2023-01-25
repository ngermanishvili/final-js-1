let showContactBtn = document.getElementById("show-contact-btn");
let contactSection = document.getElementById("contact-section");
let xmark = document.getElementById("xmark");

showContactBtn.addEventListener("click", function () {
  if (contactSection.style.display === "none") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "none";
  }
});

xmark.addEventListener("click", function () {
  contactSection.style.display = "none";
});
