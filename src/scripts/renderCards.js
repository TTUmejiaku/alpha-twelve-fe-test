import { renderCardTemplate } from "../components";

export function renderCards() {
  const mainPanelCards = document.querySelector(".main-panel__cards");

  if (mainPanelCards) {
    const cardTemplate = renderCardTemplate({
      amount: "100,000",
      arrowIcon: "/images/arrow-up-green.svg",
      isPositive: true,
      percent: "5.0",
      title: "Total Events",
    });
    mainPanelCards.innerHTML = cardTemplate;
  } else {
    console.error("Element with class 'main-panel__cards' not found");
  }
}
