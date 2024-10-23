export function renderTableCardTemplate({
  eventName,
  eventStatus,
  eventSpeaker,
  eventDate,
}) {
  return `
   <article class="tableCards__event">
     <section class="tableCards__event-header container2">
       <button class="tableCards__event-arrow">
         <img src="/images/chevron-right.svg" alt="" />
       </button>
       <h4 class="tableCards__event-title ">${eventName}</h4>
       <p class="tableCards__event-status">${eventStatus}</p>
     </section>
     <section class="tableCards__event-details container2">
       <div class="tableCards__event-details-wrapper">
         <p>${eventSpeaker}</p>
         <p>${eventDate}</p>
       </div
     </section>
  </article>
 `;
}
