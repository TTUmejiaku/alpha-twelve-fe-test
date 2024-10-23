import {
  renderTableCardTemplate,
  tableControlsTemplate,
  renderModalTemplate,
} from "../components";
import EVENTS_DATA from "../data/EVENTS_DATA.json";
import {
  handleModal,
  openModal,
  setupDropdownControls,
  toggleEvents,
} from "./index";

// Element classes
const pageNumbersClasses = ".tablePagination__left-num";
const prevBtnClass = ".tablePagination__left button:first-child";
const nextBtnClass = ".tablePagination__left button:last-child";
const rowsDropdownClass = ".tablePagination__dropdown-content";
const resultDisplayClass = ".table__display-results";
const resultDisplayPaginationClass = ".table__display-results.pagination";
const searchInputClass = ".table__search-input";
const statusDropdownClass = ".table__dropdown-content[data-filter='status']";
const nameDropdownClass = ".table__dropdown-content[data-filter='name']";
const dateDropdownClass = ".table__dropdown-content[data-filter='date']";
const tableSectionClass = ".eventHistory__table-wrapper";
const modalContainerId = "modalContainer";

// Keep track of current state
let currentPage = 1;
let rowsPerPage = 10;
let eventsData = [...EVENTS_DATA];
const eventsDataLength = EVENTS_DATA.length;

export function handleTable() {
  const tableCardsEl = document.getElementById("tableCards");
  const tableControlEl = document.getElementById("tableControl");

  tableControlEl.innerHTML = tableControlsTemplate.trim();

  // Get all required elements
  const pageNumbers = document.querySelectorAll(pageNumbersClasses);
  const prevButton = document.querySelector(prevBtnClass);
  const nextButton = document.querySelector(nextBtnClass);
  const rowsDropdown = document.querySelector(rowsDropdownClass);
  const resultsDisplay = document.querySelector(resultDisplayClass);
  const resultsDisplayPagination = document.querySelector(
    resultDisplayPaginationClass
  );
  const searchInput = document.querySelector(searchInputClass);
  const statusDropdown = document.querySelector(statusDropdownClass);
  const nameDropdown = document.querySelector(nameDropdownClass);
  const dateDropdown = document.querySelector(dateDropdownClass);
  const tableSectionEl = document.querySelector(tableSectionClass);
  const modalContainerEl = document.getElementById(modalContainerId);

  // Initial render
  renderCards(eventsData);
  renderTable(eventsData);

  // Set up event listeners and controls
  setupDropdownControls();
  toggleEvents();
  setupPaginationControls();
  setupFilterControls();

  function setupPaginationControls() {
    updateActivePageNumber();

    // Page number clicks
    pageNumbers.forEach((pageEl) => {
      pageEl.addEventListener("click", () => {
        // Remove active class from all numbers
        pageNumbers.forEach((el) => el.classList.remove("active"));

        // Add active class to clicked number
        pageEl.classList.add("active");

        // Update current page and render
        currentPage = Number(pageEl.querySelector("span").textContent);
        renderCards(EVENTS_DATA);
        renderTable(eventsData);
      });
    });

    // Previous button
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updateActivePageNumber();
        renderCards(EVENTS_DATA);
        renderTable(eventsData);
      }
    });

    // Next button
    nextButton.addEventListener("click", () => {
      if (currentPage < Math.ceil(eventsDataLength / rowsPerPage)) {
        currentPage++;
        updateActivePageNumber();
        renderCards(EVENTS_DATA);
        renderTable(eventsData);
      }
    });

    // Rows per page selection
    rowsDropdown.querySelectorAll("span").forEach((option) => {
      option.addEventListener("click", () => {
        // Update rows per page
        rowsPerPage = Number(option.textContent.split(" ")[0]);

        // Reset to first page
        currentPage = 1;
        updateActivePageNumber();
        renderCards(EVENTS_DATA);
        renderTable(eventsData);

        // Update dropdown button text
        document.querySelector(
          ".tablePagination__dropdown-btn span"
        ).textContent = `${rowsPerPage} Rows`;
      });
    });
  }

  function renderCards(eventsData) {
    const pageData = getCurrentPageData(eventsData);

    // Clear current content
    tableCardsEl.innerHTML = "";

    // Render each event
    pageData.forEach((event) => {
      const { name, status, date, speaker, id } = event;
      const eventTemplate = renderTableCardTemplate({
        eventDate: date,
        eventName: name,
        eventSpeaker: speaker,
        eventStatus: status,
      });

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = eventTemplate.trim();
      const articleEl = tempDiv.firstElementChild;

      if (status === "In Progress") {
        articleEl.classList.add("in-progress");
      }

      const eventTitleEl = articleEl.querySelector(".tableCards__event-title");
      setUpModalEvents(eventTitleEl, id);

      tableCardsEl.appendChild(articleEl);
    });

    // Update UI elements
    updatePaginationUI();
  }

  function renderTable(eventsData) {
    const pageData = getCurrentPageData(eventsData);

    // Clear current table content
    tableSectionEl.innerHTML = "";

    // Create table element
    const tableEl = document.createElement("table");
    tableEl.classList.add("eventHistory__table");

    // Create table header
    const headerRow = document.createElement("tr");
    const headers = ["Name", "Date", "Speaker", "Status"];
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    tableEl.appendChild(headerRow);

    // Render each event as a table row
    pageData.forEach((event) => {
      const { id, name, status, date, speaker } = event;
      const tbodyRow = document.createElement("tr");
      tbodyRow.classList.add("eventHistory__table-tbody");

      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      tbodyRow.appendChild(nameCell);

      const dateCell = document.createElement("td");
      dateCell.textContent = date;
      tbodyRow.appendChild(dateCell);

      const speakerCell = document.createElement("td");
      speakerCell.textContent = speaker;
      tbodyRow.appendChild(speakerCell);

      const statusCell = document.createElement("td");
      const div = document.createElement("div");
      const span = document.createElement("span");
      const p = document.createElement("p");

      p.textContent = status;
      div.appendChild(span);
      div.appendChild(p);
      div.classList.add("eventHistory__table-status");
      if (status === "In Progress") {
        div.classList.add("in-progress");
      }
      statusCell.appendChild(div);
      tbodyRow.appendChild(statusCell);

      // Add event listener to show modal
      setUpModalEvents(tbodyRow, id);

      tableEl.appendChild(tbodyRow);
    });

    // Append the table to the section
    tableSectionEl.appendChild(tableEl);
  }

  function getCurrentPageData(eventsData) {
    // Calculate range for current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return eventsData.slice(startIndex, endIndex);
  }

  function updatePaginationUI() {
    // Update navigation buttons
    prevButton.disabled = currentPage === 1;
    nextButton.disabled =
      currentPage >= Math.ceil(eventsDataLength / rowsPerPage);

    // Update results display
    const startItem = (currentPage - 1) * rowsPerPage + 1;
    const endItem = Math.min(currentPage * rowsPerPage, eventsDataLength);
    resultsDisplayPagination.textContent = `Displaying ${startItem}-${endItem} of ${eventsDataLength} results`;
    resultsDisplay.textContent = `Displaying ${endItem}  results`;
  }

  function updateActivePageNumber() {
    pageNumbers.forEach((pageEl) => {
      const pageNum = Number(pageEl.querySelector("span").textContent);
      if (pageNum === currentPage) {
        pageEl.classList.add("active");
      } else {
        pageEl.classList.remove("active");
      }
    });
  }

  function setupFilterControls() {
    // Search input
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      eventsData = EVENTS_DATA.filter((event) =>
        event.name.toLowerCase().includes(searchTerm)
      );
      currentPage = 1;
      renderCards(eventsData);
      renderTable(eventsData);
    });

    // Status filter
    statusDropdown.querySelectorAll("span").forEach((option) => {
      option.addEventListener("click", () => {
        const statusFilter = option.textContent;
        eventsData = EVENTS_DATA.filter((event) =>
          statusFilter === "All" ? true : event.status === statusFilter
        );
        currentPage = 1;
        renderCards(eventsData);
        renderTable(eventsData);
      });
    });

    // Name sort
    nameDropdown.querySelectorAll("span").forEach((option) => {
      option.addEventListener("click", () => {
        const nameOrder = option.textContent;
        eventsData.sort((a, b) => {
          if (nameOrder === "A to Z") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
        currentPage = 1;
        renderCards(eventsData);
        renderTable(eventsData);
      });
    });

    // Date sort
    dateDropdown.querySelectorAll("span").forEach((option) => {
      option.addEventListener("click", () => {
        const dateOrder = option.textContent;
        eventsData.sort((a, b) => {
          if (dateOrder === "Newest") {
            return new Date(b.date) - new Date(a.date);
          } else {
            return new Date(a.date) - new Date(b.date);
          }
        });
        currentPage = 1;
        renderCards(eventsData);
        renderTable(eventsData);
      });
    });
  }

  function setUpModalEvents(element, id) {
    element.addEventListener("click", () => {
      const eventInfo = eventsData.find((event) => id === event.id);
      modalContainerEl.innerHTML = renderModalTemplate(eventInfo);
      handleModal();
      openModal();
    });
  }
}
