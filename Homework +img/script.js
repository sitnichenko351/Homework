const slides = [...document.querySelectorAll(".slide")];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const hideSlidesOnLoad = () => {
  const slidesToHide = slides.slice(1)

  slidesToHide.forEach((slide) => {
    slide.classList.add("hidden");
  });
};
window.addEventListener("DOMContentLoaded", hideSlidesOnLoad);
let currentSlideIndex = 0;

const showNextSlideV2 = () => {
  slides[currentSlideIndex].classList.add("hidden");

  if (currentSlideIndex === slides.length - 1) {
    slides[0].classList.remove("hidden");
    currentSlideIndex = 0;
  } else {
    slides[currentSlideIndex + 1].classList.remove("hidden");
    currentSlideIndex++;
  }
};

const showPrevSlideV2 = () => {
  slides[currentSlideIndex].classList.add("hidden"); 
  
  if (currentSlideIndex === 0) {
    slides[slides.length - 1].classList.remove("hidden");
    currentSlideIndex = slides.length - 1;
  } else {
    slides[currentSlideIndex - 1].classList.remove("hidden");
    currentSlideIndex--;
  }
};

prevBtn.addEventListener("click", showPrevSlideV2);
nextBtn.addEventListener("click", showNextSlideV2);
