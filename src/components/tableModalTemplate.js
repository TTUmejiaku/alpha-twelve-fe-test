export function renderModalTemplate(eventInfo) {
  const { name: eventName, date: eventDate } = eventInfo;

  return `
    <div class="table-modal">
      <section class="table-modal__header">
          <div>
              <h2 class="table-modal__header-title">${eventName}</h2>
              <p class="table-modal__header-date">${eventDate}</p>
          </div>
          <button class="table-modal__close-button">
              <img src="/images/close.svg" alt="" />
          </button>
      </section>
      <section class="table-modal__content">
          <p class="table-modal__content-title">Event Description</p>
          <div class="table-modal__avatars">
            <span class="table-modal__avatar">
              <img src="/images/avatar-1.png" alt="Speaker A">
            </span>
            
            <span class="table-modal__avatar">
               <img src="/images/avatar-2.png" alt="Speaker B">
            </span>
            
            <span class="table-modal__avatar">
              <img src="/images/avatar-3.png" alt="Speaker C">
            </span>
          </div>
          <div class="table-modal__speakers">
            <p>
              3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C
            </p>
            <p>300 Attendees</p>
          </div>
      </section>
      <section class="table-modal__actions">
        <button class="table-modal__actions-edit">Edit</button>
        <div>
          <button class="table-modal__actions-delete">Delete</button>
          <button class="table-modal__actions-completed">
            Mark as completed
          </button>
        </div>
      </section>
  </div>
 `;
}
