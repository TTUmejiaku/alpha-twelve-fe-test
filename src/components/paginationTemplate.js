export const paginationTemplate = `
  <article class="tablePagination container2">
     <section class="tablePagination__left">
       <button class="" >
         <img src="/images/chevron-left.svg" alt=""/>
       </button>
       <div class="tablePagination__left-num ">
         <span class="">1</span>
       </div>
       <div class="tablePagination__left-num">
         <span >2</span>
       </div>
       <div class="tablePagination__left-num">
         <span >3</span>
       </div>
       <button class="canNavigate">
         <img src="/images/chevron-right.svg" alt=""/>
       </button>
     </section>
     <h3 class="table__display-results pagination">
       Displaying 100 results
     </h3>
     <section class="tablePagination__dropdown">
       <button class="tablePagination__dropdown-btn ">
         <span>10 Rows</span>
         <img src="/images/chevron-down.svg"/>
       </button>
       <div class="tablePagination__dropdown-content">
         <span >5 Rows</span>
         <span >10 Rows</span>
         <span >15 Rows</span>
       </div>
     </section>
  </article>
`;
