const dropdownContentClasses = [
  ".table__dropdown-content",
  ".tablePagination__dropdown-content",
];
const dropdownBtnClasses = [
  ".table__dropdown-btn",
  ".tablePagination__dropdown-btn",
];

// Function to set up event listeners for dropdowns
export function setupDropdownControls() {
  document.querySelectorAll(dropdownBtnClasses).forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const currDropdownContent = this.nextElementSibling;

      // Toggle the current dropdown while closing others
      const isOpen = currDropdownContent.classList.contains("show");
      closeAllDropdowns(); // Close all dropdowns

      // Open the clicked dropdown if it was not already open
      if (!isOpen) {
        currDropdownContent.classList.add("show");
      }
    });
  });

  // Close all dropdowns if clicking outside
  window.addEventListener("click", function () {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(dropdownContentClasses).forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
}
