import Swiper from 'swiper';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const feedback_swiper = new Swiper('.feedback__swiper', {
    modules: [Pagination, Mousewheel, Autoplay],
    slidesPerView: 3,
    spaceBetween: 5,
  });
})
