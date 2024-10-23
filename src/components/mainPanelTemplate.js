export const mainPanelTemplate = `
  <main id="mainPanel" class="main-panel">
    <header class="main-panel__header ">
      <div class="main-panel__header-wrapper container2">
        <div class="main-panel__logo">
          <h3>Full Logo</h3>
        </div>
        <button class="main-panel__close">
          <img src="/images/hamburger.svg" alt="" />
        </button>
      </div>
    </header>
    <section class="main-panel__top ">
      <div class="container2">
        <h1 class="main-panel__title">Welcome! here’s your summary</h1>
        <div class="main-panel__cards">
        </div>
      </div>
    </section>
    <section class="chartAndCarousel">
      <div class="container2 ">
        <h3 class="chartAndCarousel__title">Event Registrations per month</h3>
        <section class="chartAndCarousel__wrapper ">
          <div class="chartAndCarousel__chart ">
            <canvas id="myChart"></canvas>
          </div>
          <div class="carousel__container "></div>
        </section>
      </div>
    </section>
    <section class="eventHistory">
      <h3 class="eventHistory__title container2">Event History</h3>
      <div class="eventHistory__wrapper">
        <section id="tableControl" class="container2"></section>
        <section class="eventHistory__table-cards">
          <div class="tableCards__header-wrapper">
            <div class="tableCards__header container2">
              <h4>Event Name</h4>
              <h4>Status</h4>
            </div>
          </div>
          <div id="tableCards" class="mt8"></div>
        </section>
        <section class="eventHistory__table-wrapper container2"></section>
        <section id="tablePagination" class="eventHistory__table-pagination ">
        </section>
      </div>
   </section>
   <section id="modalContainer" class="modal__portal"></section>
   <footer class="main-panel__footer"></footer/>
</main>
`;
