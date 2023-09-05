const carousel = document.querySelector(".slides");
arrowIcons = document.querySelectorAll(".container i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
