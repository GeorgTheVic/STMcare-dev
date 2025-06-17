import Swiper from 'swiper';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper_course = new Swiper('.course__swiper', {
    modules: [Pagination, Autoplay, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: true,
    mousewheel: true,
  });
})
