import { sidebarTemplate, mainPanelTemplate } from "../components";
import { renderSidebarItems, mainPanel } from "./index";

export function initializeDashboard() {
  const dashboard = document.querySelector(".dashboard");

  if (!dashboard) {
    console.error("Element with class 'dashboard' not found.");
    return;
  }

  dashboard.innerHTML = sidebarTemplate + mainPanelTemplate;

  renderSidebarItems();
  mainPanel();
}
