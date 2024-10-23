// let currentPage = 1;
// let rowsPerPage = 10;

// // const tableCardsEl = document.querySelector(".tableCards");
// // const paginationEl = document.querySelector(".tablePagination");
// // const pageNumbersEl = paginationEl.querySelectorAll(
// //   ".tablePagination__left-num span"
// // );
// // const prevButton = paginationEl.querySelector(
// //   ".tablePagination__left button:first-child"
// // );
// // const nextButton = paginationEl.querySelector(
// //   ".tablePagination__left button:last-child"
// // );
// // const dropdownContent = paginationEl.querySelector(
// //   ".tablePagination__dropdown-content"
// // );

// export function renderEventsPage(page) {
//   // Calculate the range of events for the current page
//   const startIndex = (page - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;
//   const eventsToDisplay = EVENTS_DATA.slice(startIndex, endIndex);

//   // Clear current events
//   tableCardsEl.innerHTML = "";

//   // Render events for the current page
//   eventsToDisplay.forEach((event) => {
//     const { name, status, date, speaker } = event;
//     const eventTemplate = renderTableCardTemplate({
//       eventDate: date,
//       eventName: name,
//       eventSpeaker: speaker,
//       eventStatus: status,
//     });

//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = eventTemplate;
//     const articleEl = tempDiv.firstElementChild;

//     tableCardsEl.appendChild(articleEl);
//   });

//   updatePaginationUI(page);
// }

// function updatePaginationUI(page) {
//   currentPage = page;

//   // Update the pagination number styles
//   pageNumbersEl.forEach((pageEl, index) => {
//     if (index === page - 1) {
//       pageEl.parentElement.classList.add("active");
//     } else {
//       pageEl.parentElement.classList.remove("active");
//     }
//   });

//   // Disable/enable navigation buttons
//   prevButton.disabled = page === 1;
//   nextButton.disabled = page === pageNumbersEl.length;
// }

// // Add event listeners to page numbers
// pageNumbersEl.forEach((pageEl, index) => {
//   pageEl.addEventListener("click", () => {
//     const page = index + 1;
//     renderEventsPage(page);
//   });
// });

// // Add event listeners to navigation buttons
// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     renderEventsPage(currentPage - 1);
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentPage < pageNumbersEl.length) {
//     renderEventsPage(currentPage + 1);
//   }
// });

// // Add event listeners to rows per page dropdown
// dropdownContent.addEventListener("click", (event) => {
//   const selectedRows = event.target.textContent;
//   rowsPerPage = parseInt(selectedRows);
//   renderEventsPage(1);
// });
