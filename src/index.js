import 'normalize.css';  // npm install normalize.css

 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

import './styles/main.scss';

 // init Swiper:
var swiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  freeMode: true,
  slidesPerGroup: 3,
  loop:true,
  mousewheel: true,
  loopFillGroupWithBlank: true,
  keyboard: true,
  spaceBetween: 25,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination]
});

var swiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  slidesPerGroup: 3,
  loop:true,
  mousewheel: true,
  loopFillGroupWithBlank: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination]
});