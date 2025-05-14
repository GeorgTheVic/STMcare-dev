import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// Swiper.use([Pagination]);
const swiper = new Swiper('.course__swiper', {
  modules: [Pagination],
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
});