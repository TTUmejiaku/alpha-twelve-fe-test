export function renderCardTemplate({
  title,
  amount,
  arrowIcon,
  percent,
  isPositive,
}) {
  return `
   <article class="card">
      <section class="card__header">
        <h3 class="card__title">${title}</h3>
        <img src="/images/information.svg"/>
      </section>
      <section class="card__content">
        <p class="card__content-text">${amount}</p>
        <div class="card__percent-wrapper isPositive">
          <img src="${arrowIcon}"/>
          <p>${isPositive ? "+" : "-"}${percent}%</p>
        </div>
      </section>
    </article>
 `;
}
