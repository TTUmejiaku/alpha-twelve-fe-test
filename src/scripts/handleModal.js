export function handleModal() {
  const modalContainerEl = document.getElementById("modalContainer");
  const closeButtonEl = document.querySelector(".table-modal__close-button");
  const editButtonEl = document.querySelector(".table-modal__actions-edit");
  const deleteButtonEl = document.querySelector(".table-modal__actions-delete");
  const completedButtonEl = document.querySelector(
    ".table-modal__actions-completed"
  );
  if (!modalContainerEl) {
    console.error("Element with id 'modalContainer' not found");
    return;
  }

  // Add event listener to modal elements
  modalContainerEl.addEventListener("click", closeModal);

  closeButtonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal();
  });

  editButtonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    editEvent();
  });

  deleteButtonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteEvent();
  });

  completedButtonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    markAsComplete();
  });

  function closeModal() {
    modalContainerEl.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  function editEvent() {
    closeModal();
    alert("Event edited");
  }

  function deleteEvent() {
    closeModal();
    alert("Event deleted");
  }

  function markAsComplete() {
    closeModal();
    alert("Event marked as completed");
  }
}

export function openModal() {
  const modalContainerEl = document.getElementById("modalContainer");

  if (!modalContainerEl) {
    console.error("Element with id 'modalContainer' not found");
    return;
  }

  modalContainerEl.classList.add("show");

  const isModalOpen = modalContainerEl.classList.contains("show");
  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
}
