const linkClasses = [
  ".sidebar__menu-item",
  ".sidebar__menu-item--notification",
  ".main-panel__footer-menu-link",
];

export function updateActiveItem(activeItem) {
  // Remove active class from all items
  document
    .querySelectorAll(linkClasses)
    .forEach((item) => item.classList.remove("active"));

  // Add active class to clicked item
  document
    .querySelectorAll(`[data-id="${activeItem}"]`)
    .forEach((item) => item.classList.add("active"));
}
