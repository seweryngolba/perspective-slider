const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider li");

let currentIndex = 0;

const goToSlide = (index) => {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  currentIndex = index;
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
};

const nextSlide = () => {
  goToSlide(currentIndex + 1);
};

const prevSlide = () => {
  goToSlide(currentIndex - 1);
};

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
