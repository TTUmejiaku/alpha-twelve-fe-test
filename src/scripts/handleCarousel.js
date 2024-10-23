import { carouselTemplate } from "../components";

// Counter to keep track of the current slide
let counter = 0;

// Main function to set up and handle the carousel
export function handleCarousel() {
  const slideContainer = document.querySelector(".carousel__container");
  if (!slideContainer) {
    console.error("Element with class 'carousel__container' not found");
    return;
  }

  // Insert the carousel HTML template
  slideContainer.innerHTML = carouselTemplate.trim();

  // Get all slides and legend elements
  const slides = document.querySelectorAll(".carousel__slide");
  const slideLegends = document.querySelectorAll(".carousel__legend");

  initializeSlides(slides, slideLegends);
  setupControls(slides, slideLegends);
}

// Function to set initial positions of slides and activate first legend
function initializeSlides(slides, slideLegends) {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  slideLegends[0].classList.add("active");
}

// Function to set up event listeners for carousel controls
function setupControls(slides, slideLegends) {
  const controls = {
    next: document.querySelector(".carousel__control.next"),
    prev: document.querySelector(".carousel__control.prev"),
  };

  // Set up click events for next and prev buttons
  Object.entries(controls).forEach(([direction, control]) => {
    control.addEventListener("click", () => {
      // Increment or decrement the counter based on the direction
      counter += direction === "next" ? 1 : -1;
      showCarousel(slides, slideLegends);
    });
  });
}

// Function to update the carousel display
function showCarousel(slides, slideLegends) {
  // Ensure counter stays within bounds (0 to slides.length - 1)
  counter = (counter + slides.length) % slides.length;

  // Move all slides based on the counter
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  // Update the active state of legends
  slideLegends.forEach((legend, index) => {
    legend.classList.toggle("active", index === counter);
  });
}
