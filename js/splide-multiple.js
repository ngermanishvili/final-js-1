var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
  interval: 1500,
  direction: "rtl",
  perPage: 3,
  height: "40rem",
  autoScroll: {
    speed: 1,
  },
});

splide.mount();
