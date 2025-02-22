document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBD = document.querySelector('.header-menu-open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const backdrop = document.querySelector('.backdrop');
  const menuItems = document.querySelectorAll('.menu-item a');

  // show bd
  if (menuOpenBD && backdrop) {
    menuOpenBD.addEventListener('click', () => {
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }

  // hide bd
  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  }

  // hide bd after choosen menu
  if (menuItems && backdrop) {
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        backdrop.classList.remove('show');
        document.body.style.overflow = 'auto';
      });
    });
  }
});
