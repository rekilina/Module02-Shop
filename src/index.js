import 'normalize.css';  // npm install normalize.css

 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

 import './styles/main.scss';

 // init Swiper:
var swiper1 = new Swiper(".offerSwiper", {
  slidesPerView: "auto",
  freeMode: true,
  loop:true,
  mousewheel: true,
  loopFillGroupWithBlank: true,
  keyboard: true,
  spaceBetween: 14,
  speed: 800,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    // when window width is >= 300px
    400: {
      slidesPerView: 2,
      // slidesPerGroup: 2,
      spaceBetween: 25
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25
    }
  }
});

var swiper2 = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  slidesPerGroup: 3,
  loop:true,
  mousewheel: true,
  loopFillGroupWithBlank: true,
  keyboard: true,
  watchOverflow: true,
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

let burger = document.querySelector('.header__burger');
burger.addEventListener("click", function() {
  this.classList.toggle("burger_close");
})