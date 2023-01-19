const body = document.querySelector(".page-container");
const shuffleBtn = document.querySelector(".shuffle-btn");
const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".item__img");

const imageLinks = [
  "https://www.nawpic.com/media/2020/nawpic-244.jpg",
  "https://blog.myfitnesspal.com/wp-content/uploads/2017/02/10-Things-to-Look-for-in-Your-Personal-Trainer.jpg",
  "https://blog.myfitnesspal.com/wp-content/uploads/2017/02/10-Things-to-Look-for-in-Your-Personal-Trainer.jpg",
  "https://img.freepik.com/free-photo/young-beautiful-woman-bright-sportwear-isolated-gradient-pink-blue-background-neon-light_155003-24205.jpg?t=st=1673989650~exp=1673990250~hmac=f16d4257fe59f37d33413fb2dce7c53701542f36fe248e7e247cdbce01118ff9",
  "https://img.freepik.com/free-photo/young-beautiful-woman-bright-sportwear-isolated-gradient-pink-blue-background-neon-light_155003-24205.jpg?t=st=1673989650~exp=1673990250~hmac=f16d4257fe59f37d33413fb2dce7c53701542f36fe248e7e247cdbce01118ff9",
  "https://wallpaperaccess.com/full/2591617.jpg",
];

shuffleImages();
checkOrientation();

window.addEventListener("resize", () => {
  checkOrientation();
});

shuffleBtn.addEventListener("click", shuffleImages);

items.forEach((elem) => {
  elem.addEventListener("click", () => {
    zoomImage(elem);
  });
});

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    body.classList.add("vertical");
  } else {
    body.classList.remove("vertical");
  }
}

function zoomImage(el) {
  el.classList.toggle("active");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleImages() {
  shuffleArray(imageLinks);

  for (let i = 0; i < images.length; i++) {
    images[i].src = imageLinks[i];
  }
}
