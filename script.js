// Slider for Projects page

const slidesContainer = document.getElementById("projects");
const slide = document.querySelector(".proj");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//==========================================