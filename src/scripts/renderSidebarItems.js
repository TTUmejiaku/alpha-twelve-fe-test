import { sidebarData } from "../data";
import { switchTemplate } from "../components";
import { updateActiveItem, handleSidebarActions } from "./index";

export function renderSidebarItems() {
  const sidebarNavItems = document.getElementById("sidebarNavItems");

  renderNavItems(sidebarNavItems);
  renderSwitch();
  handleSidebarActions();
}

function renderNavItems(container) {
  sidebarData.forEach((item) => {
    const isActive = item.id === "home";
    const li = createNavItem(item, isActive);
    container.appendChild(li);
  });
}

function createNavItem(item, isActive = false) {
  const li = document.createElement("li");
  li.setAttribute("data-id", item.id);

  if (isActive) {
    li.classList.add("active");
  }

  const a = document.createElement("a");
  a.href = item.href;
  a.classList.add("sidebar__menu-link");

  const img = document.createElement("img");
  img.src = item.icon;
  img.alt = item.name;
  img.classList.add("sidebar__menu-img");

  const span = document.createElement("span");
  span.textContent = item.name;
  span.classList.add("sidebar__menu-text");

  const count = document.createElement("p");
  count.textContent = 3;

  const counterDiv = document.createElement("div");
  counterDiv.classList.add("sidebar__notification");
  counterDiv.appendChild(count);

  a.appendChild(img);
  a.appendChild(span);
  li.appendChild(a);

  if (item.name === "Notifications") {
    li.classList.add("sidebar__menu-item--notification");
    li.appendChild(counterDiv);
  } else {
    li.classList.add("sidebar__menu-item");
  }

  // Add click event listener to update active item
  li.addEventListener("click", function (event) {
    event.preventDefault();
    const activeItem = this.getAttribute("data-id");
    updateActiveItem(activeItem);
  });

  return li;
}

function renderSwitch() {
  const sidebarItemSwitch = document.querySelector(
    ".sidebar__menu-item--switch"
  );

  sidebarItemSwitch.innerHTML = switchTemplate;

  const switchLabel = document.createElement("span");
  switchLabel.textContent = "Dark mode";
  switchLabel.classList.add("sidebar__menu-text");

  const toggleDarkModeButton =
    sidebarItemSwitch.querySelector(".switch__input");
  toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  sidebarItemSwitch.appendChild(switchLabel);
}
