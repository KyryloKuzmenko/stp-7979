import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
