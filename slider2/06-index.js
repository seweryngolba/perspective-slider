const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentPosition = 0;
const step = 600;

function moveSlider(direction) {
  if (direction === "prev") {
    currentPosition += step;
  } else {
    currentPosition -= step;
  }

  if (currentPosition > 0) {
    currentPosition = -(slider.children.length - 1) * step;
  } else if (currentPosition < -(slider.children.length - 1) * step) {
    currentPosition = 0;
  }

  slider.style.left = currentPosition + "px";
}

prevBtn.addEventListener("click", function () {
  moveSlider("prev");
});
nextBtn.addEventListener("click", function () {
  moveSlider("next");
});
