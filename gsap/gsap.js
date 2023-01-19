
gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
   
);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
});

// Select the element
const parallax = document.querySelector(".parallax");

// Create the scrollTrigger
const trigger = gsap.utils.scrollTrigger.create({
  trigger: parallax,
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  pin: true,
  anticipatePin: 1
});

// Create the tween
gsap.to(parallax, {
  backgroundPositionY: "20%",
  ease: "none",
  scrollTrigger: trigger
});
