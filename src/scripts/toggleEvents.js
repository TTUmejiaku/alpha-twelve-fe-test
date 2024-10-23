const eventArticleClass = ".tableCards__event";
const eventButtonClass = ".tableCards__event-arrow";

export function toggleEvents() {
  // Add click event listeners to all event
  document.querySelectorAll(eventArticleClass).forEach((articleEl) => {
    articleEl
      .querySelector(eventButtonClass)
      .addEventListener("click", function (event) {
        event.stopPropagation();

        // Toggle the current event while closing others
        const isOpen = articleEl.classList.contains("show");
        closeAllEvents();

        // Open the clicked event if it was not already open
        if (!isOpen) {
          articleEl.classList.add("show");
        }
      });
  });

  // Close all events if clicking outside
  window.addEventListener("click", function () {
    closeAllEvents();
  });
}

// Helper function to close all events
function closeAllEvents() {
  document.querySelectorAll(eventArticleClass).forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
}
