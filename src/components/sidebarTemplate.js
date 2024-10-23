export const sidebarTemplate = `
  <aside class="sidebar">
    <div class="container">
    <header class="sidebar__header">
      <div class="sidebar__logo">
        <h2>Full Logo</h2>
      </div>
      <button class="sidebar__close">
        <img src="/images/close.svg" alt="" />
      </button>
    </header>
    <nav class="sidebar__nav">
      <ul id="sidebarNavItems" class="sidebar__menu "></ul>
      <ul id="sidebarNavItems2" class="sidebar__menu mt8  ">
        <li class="sidebar__menu-item--collapse ">
          <img src="/images/double-chevron-left.svg" alt=""/>
          <p class="sidebar__menu-text ">Collapse</p>
        </li>
        <li class="sidebar__menu-item--switch "></li>
        <li class="sidebar__menu-item--user ">
          <img src="/images/avatar.svg" alt="" class=""/>
          <div class="sidebar__menu-text ">
            <p class="sidebar__menu-username">Rudra Devi</p>
            <p class="sidebar__menu-email">rudra.devi@gmail.com</p>
          </div>
        </li>
      </ul>
    </nav>
    </div>
  </aside>
`;
