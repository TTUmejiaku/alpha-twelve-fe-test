export const tableControlsTemplate = `
  <div class="eventHistory__table-control">
    <section class="table__control-filters ">
      <div class="table__search-container">
        <img src="/images/search.svg" alt="" class="table__search-icon"/>
        <input type="text" placeholder="Search..." class="table__search-input">
      </div>
      <div class="table__dropdown ">
        <button class="table__dropdown-btn ">
          <span>Date</span>
          <img src="/images/chevron-down.svg"/>
        </button>
        <div class="table__dropdown-content" data-filter='date'>
            <span >Newest</span>
            <span >Oldest</span>
        </div>
      </div>
      <div class="table__dropdown">
        <button class="table__dropdown-btn ">
          <span>Status</span>
          <img src="/images/chevron-down.svg"/>
        </button>
        <div class="table__dropdown-content" data-filter='status'>
          <span >Completed</span>
          <span >In Progress</span>
          <span >All</span>
        </div>
      </div>
      <div class="table__dropdown">
      <button class="table__dropdown-btn ">
          <span>Name</span>
          <img src="/images/chevron-down.svg"/>
        </button>
        <div class="table__dropdown-content" data-filter='name'>
            <span >A to Z</span>
            <span >Z to A</span>
        </div>
      </div>
    </section>
    <section class="table__control-sortAndExport ">
      <h3 class="table__display-results">Displaying 100 results</h3>
      <div class="table__control-sortAndExport-wrapper ">
        <div class="table__control-sort">
          <p>Sort:</p>
          <div class="table__dropdown ">
            <button class="table__dropdown-btn ">
              <span>Most Recent</span>
              <img src="/images/chevron-down.svg"/>
            </button>
            <div class="table__dropdown-content ">
                <span >Most Recent</span>
                <span >Less Recent</span>
                <span >Most Popular</span>
            </div>
          </div>
        </div>
        <div class="table__control-export">
          <button class="table__vertical-dot ">
            <img src="/images/vertical-dot.svg"/>
          </button>
          <div class="table__export-btn ">
            <img src="/images/download.svg"/>
            <span>Export</span>
          </div>
        </div>
      </div>
    </section>
  </div>
`;
