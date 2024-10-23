import { renderTableCardTemplate, tableControlsTemplate } from "../components";
import EVENTS_DATA from "../data/EVENTS_DATA.json";
import { setupDropdownControls, toggleEvents } from "./index";

let currentPage = 1;
let rowsPerPage = 10;

// Main function to set up and handle table
export function handleTable() {
  const tableControlEl = document.getElementById("tableControl");
  let pageNumbersEl = document.querySelectorAll(".tablePagination__left-num");
  let prevButton = document.querySelector(
    ".tablePagination__left button:first-child"
  );
  let nextButton = document.querySelector(
    ".tablePagination__left button:last-child"
  );
  let rowsPerPageEl = document.querySelector(".tablePagination__dropdown");
  let rowsPerPageContent = document.querySelector(
    ".tablePagination__dropdown-content"
  );

  if (!tableControlEl) {
    console.error("Elements with id 'tableControl' not found");
    return;
  }

  // Insert the table controls HTML template
  tableControlEl.innerHTML = tableControlsTemplate.trim();

  // Initial render of page 1
  renderEventsPage();

  setupDropdownControls();
  toggleEvents();
  handlePaginationControls({
    nextButton,
    pageNumbersEl,
    prevButton,
    rowsPerPageContent,
    rowsPerPageEl,
  });
}

function renderEventsPage() {
  const tableCardsEl = document.getElementById("tableCards");
  let prevButton = document.querySelector(
    ".tablePagination__left button:first-child"
  );
  let nextButton = document.querySelector(
    ".tablePagination__left button:last-child"
  );

  // Calculate the range of events for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const eventsToDisplay = EVENTS_DATA.slice(startIndex, endIndex);

  // Clear current events
  tableCardsEl.innerHTML = "";

  // Render events for the current page
  eventsToDisplay.forEach((event) => {
    const { name, status, date, speaker } = event;
    const eventTemplate = renderTableCardTemplate({
      eventDate: date,
      eventName: name,
      eventSpeaker: speaker,
      eventStatus: status,
    });

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = eventTemplate;

    const articleEl = tempDiv.firstElementChild;

    if (status === "In Progress") {
      articleEl.classList.add("in-progress");
    }

    tableCardsEl.appendChild(articleEl);
  });

  updatePaginationUI(prevButton, nextButton);
}

function handlePaginationControls({
  pageNumbersEl,
  prevButton,
  nextButton,
  rowsPerPageEl,
  rowsPerPageContent,
}) {
  addActiveClassToElement(pageNumbersEl, "active");

  // Add event listeners to page numbers
  pageNumbersEl.forEach((pageEl, index) => {
    pageEl.addEventListener("click", () => {
      removeActiveClass(pageNumbersEl, "active");

      const pageIndex = Number(pageEl.querySelector("span").textContent);
      currentPage = pageIndex;
      pageEl.classList.add("active");

      renderEventsPage();
    });
  });

  // Add event listeners to navigation buttons
  prevButton?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderEventsPage();
    }
  });

  nextButton?.addEventListener("click", () => {
    if (currentPage < Math.ceil(EVENTS_DATA.length / rowsPerPage)) {
      currentPage++;
      renderEventsPage();
    }
  });
}

function updatePaginationUI(prevButton, nextButton) {
  // Disable/enable navigation buttons
  if (prevButton && nextButton) {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled =
      currentPage >= Math.ceil(EVENTS_DATA.length / rowsPerPage);
  }
}

function addActiveClassToElement(elements, className) {
  elements.forEach((el) => {
    const pageIndex = Number(el.querySelector("span").textContent);

    if (currentPage === pageIndex) {
      el.classList.add(className);
    }
  });
}

function removeActiveClass(elements, className) {
  elements.forEach((el) => {
    el.classList.remove(className);
  });
}
