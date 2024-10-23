import {
  cardsTemplate,
  footerTemplate,
  paginationTemplate,
} from "../components";
import {
  updateActiveItem,
  renderChart,
  handleCarousel,
  handleTable,
} from "./index";

export function mainPanel() {
  renderMainPanelCards();
  renderChart();
  handleCarousel();
  renderPagination();
  renderFooter();
  handleTable();
}

export function renderMainPanelCards() {
  const mainPanelCards = document.querySelector(".main-panel__cards");

  if (!mainPanelCards) {
    console.error("Element with class 'main-panel__cards' not found");
    return;
  }

  mainPanelCards.innerHTML = cardsTemplate.trim();
}

export function renderPagination() {
  const tablePaginationEl = document.getElementById("tablePagination");

  if (!tablePaginationEl) {
    console.error("Element with id 'tablePagination' not found");
    return;
  }

  tablePaginationEl.innerHTML = paginationTemplate.trim();
}

export function renderFooter() {
  const footer = document.querySelector(".main-panel__footer");

  if (footer) {
    footer.innerHTML = footerTemplate.trim();
  } else {
    console.error("Element with class 'main-panel__footer' not found");
  }

  // Add event to footer links
  const footerLinks = document.querySelectorAll(
    ".main-panel__footer-menu-link"
  );

  if (footerLinks.length) {
    footerLinks.forEach((item) => {
      const activeItem = item.getAttribute("data-id");

      if (activeItem === "home") {
        item.classList.add("active");
      }

      item.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(activeItem);
        updateActiveItem(activeItem);
      });
    });
  } else {
    console.error(
      "Element with class '.main-panel__footer-menu-link' not found."
    );
  }
}
