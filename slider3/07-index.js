const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 300}px)`;
}

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + 5) % 5;
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % 5;
  showSlide(slideIndex);
});

showSlide(slideIndex);
