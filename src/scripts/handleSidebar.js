const collapseBtnClass = ".sidebar__menu-item--collapse";
const closeSidebarBtnClasses = [".sidebar__close", ".main-panel__close"];

export function handleSidebarActions() {
  // Attach event listeners for actions
  const collapseBtn = document.querySelector(collapseBtnClass);
  const closeSidebarBtns = document.querySelectorAll(closeSidebarBtnClasses);

  if (!collapseBtn || !closeSidebarBtns) {
    console.error(
      "Element with class 'sidebar__menu-item--collapse' not found."
    );
    console.error(
      "Elements with class '.sidebar__close' and '.main-panel__close' not found."
    );
    return;
  }

  collapseBtn.addEventListener("click", toggleSidebar);
  closeSidebarBtns.forEach((item) =>
    item.addEventListener("click", handleCloseSidebar)
  );
}

export function handleCloseSidebar() {
  const sidebar = document.querySelector(".sidebar");

  if (!sidebar) {
    console.error("Sidebar element not found.");
    return;
  }

  const hasShowSidebar = sidebar.classList.contains("showSidebar");
  document.body.style.overflow = hasShowSidebar ? "auto" : "hidden";

  sidebar.classList.toggle("showSidebar");
}

export function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainPanel = document.getElementById("mainPanel");

  if (!sidebar && !mainPanel) {
    console.error("Sidebar text elements not found.");
    return;
  }

  sidebar.classList.toggle("collapse-sidebar");
  mainPanel.classList.toggle("collapse-sidebar");
}
