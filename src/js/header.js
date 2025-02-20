document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBD = document.querySelector('.header-menu-open-btn');
  const closeBtn = document.querySelector('.close-btn');

  //show backdrop
  if (menuOpenBD) {
    menuOpenBD.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  //hide backdrop
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
  }
});
