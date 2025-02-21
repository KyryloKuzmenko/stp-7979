// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// });

import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        // Для мобильных
        slidesPerView: 1,
        centeredSlides: false, // Обычный режим
      },
      1200: {
        // Для планшетов и ПК
        slidesPerView: 1.5,
        centeredSlides: true,
      },
    },
    on: {
      init: function () {
        applyScale();
      },
      transitionEnd: function () {
        applyScale();
      },
    },
  });

  function applyScale() {
    const isMobile = window.innerWidth < 1200;
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.style.transform = isMobile ? 'scale(1)' : 'scale(0.8)';
    });
    if (!isMobile) {
      document.querySelector('.swiper-slide-active').style.transform =
        'scale(1)';
    }
  }

  window.addEventListener('resize', applyScale);
});
