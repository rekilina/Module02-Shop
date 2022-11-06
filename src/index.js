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
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  freeMode: true,
  loop:true,
  mousewheel: true,
  loopFillGroupWithBlank: true,
  keyboard: true,
  watchOverflow: true,
  // slidesPerView: 1,
  // slidesPerGroup: 1,
  // freeMode: true,
  // loop:true,
  // mousewheel: true,
  // loopFillGroupWithBlank: true,
  // keyboard: true,
  // spaceBetween: 50,
  // speed: 800,
  // watchOverflow: true,
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
      spaceBetween: 30
    }
  }
});

var swiper2 = new Swiper(".trendsSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  freeMode: true,
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
  modules: [Navigation, Pagination],
  breakpoints: {
    // when window width is >= 300px
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30
    },
    700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40
    }
  }
});
// ScrollIntoView
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const content = this.textContent;
  if (content != "в корзину") {
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
  }
}
for (let elem of document.querySelectorAll(".header__link, .link, .footer__list-link")) {
  elem.addEventListener('click', clickHandler);
}

let burger = document.querySelector('.header__burger');
burger.addEventListener("click", function() {
  this.classList.toggle("burger_close");
})
// input validation
for(let elem of document.querySelectorAll(".counter__input")) {
  elem.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      e.preventDefault(); 
      if(Number(this.value) < 0) {
        this.value = '0';
      }
    }
  })
}
// product counter
document.addEventListener('click', function(e) {
  let pressed_btn = e.target;
  if(e.target.tagName == "IMG") {
    pressed_btn = e.target.parentElement;
  }
  if(e.target.tagName == "BUTTON") {
    pressed_btn = e.target;
  }
  // console.log(e.target.tagName);
  let target_input = pressed_btn.parentElement.querySelector("input");
  if(pressed_btn.classList.contains("counter__plus")) {
    target_input.value = Number(target_input.value) + 1;
  }
  if(pressed_btn.classList.contains("counter__minus")) {
    if (target_input.value > 0) {
      target_input.value -= 1;
    }
  }
})

// hide banner cards
// for (let card of document.querySelectorAll(".main__btn-card")) {
//   card.hidden = true;
// }
//product cards at the banner
let main_banner_btns = document.querySelectorAll('.main__btn, .main__btn+p');
for (let btn of main_banner_btns) {
  btn.addEventListener('click', function(e) {
    let current_target = e.target;
    let btn_parent = current_target.closest('.main__btn-border');
    let current_card = btn_parent.querySelector('.main__btn-card');
    if(current_card.style.visibility == 'hidden') {
      current_card.style.visibility = "visible";
    } else {
      if (current_card.style.visibility = "visible") {
        current_card.style.visibility = "hidden"
      }
    }
  })
}
for(let close_card of document.querySelectorAll('.main__btn-card-close')) {
  close_card.addEventListener('click', function(e) {
    let current_card = this.parentElement;
    if(current_card.style.visibility == 'hidden') {
      current_card.style.visibility = "visible";
    } else {
      if (current_card.style.visibility = "visible") {
        current_card.style.visibility = "hidden"
      }
    }
  })
}

//scrollToTop
let buttonToTop = document.querySelector('.upToTop');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight/2 || document.documentElement.scrollTop > window.innerHeight/2) {
    buttonToTop.style.visibility = "visible";
  } else {
    buttonToTop.style.visibility = "hidden";
  }
}
buttonToTop.onclick = topFunction;
function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }); // For Safari
} 
// show drop-down menu

burger.addEventListener('click', dropDownMenu);
let burger_navigation = document.querySelector('.burger__nav');
function dropDownMenu(e) {
  e.preventDefault;
  if (window.innerWidth < 1000) {
    burger_navigation.classList.toggle('burger__nav-open');
  }
}

let link_card_obj = document.querySelectorAll('.link');
let card__popup = document.querySelector('.card__popup');
let card__popup_close = document.querySelector('.card__popup-close');
card__popup_close.addEventListener('click', function(e) {
  card__popup.style.visibility = "hidden";
})
card__popup.style.visibility = "hidden";
for (let link_card of link_card_obj) {
  link_card.addEventListener('click', function(e) {
    console.log(e.target);
    if(e.target.textContent == 'в корзину') {
      let card_popup_item = document.querySelector('.card__popup-item');
      let target_slide, title, slide_img;
      // select title
      if(e.target.closest('.swiper-slide')) {
        target_slide = e.target.closest('.swiper-slide');
        title = target_slide.querySelector('.swiper-slide__title').textContent;
        slide_img = target_slide.querySelector('.swiper-slide__img');
      }
      // select img
      if(e.target.closest('.catalog__grid-card')) {
        target_slide = e.target.closest('.catalog__grid-card');
        title = target_slide.querySelector('.catalog__grid-title').textContent;
        slide_img = target_slide.querySelector('.catalog__grid-img');
      } 
      // set title
      card_popup_item.textContent = title; 
      // add img
      let card_img = document.createElement('img');
      card_img.src = slide_img.src;
      card_img.className = 'card__popup-img';
      let card_img_container = document.querySelector('.card__popup-container');
      if(card_img_container.children.length > 0) {
        card_img_container.innerHTML = "";
      }
      card_img_container.appendChild(card_img);
      // set position
      let card_rect = document.querySelector('.header__card').getBoundingClientRect()
      let popup_top = window.pageYOffset + card_rect.bottom + 15;
      let popup_left = card_rect.left -  card__popup.offsetWidth + card_rect.width + 18 ; // + card_rect.width/2 -  card__popup.offsetWidth - 18;
      card__popup.style.top = popup_top + 'px';
      card__popup.style.left = popup_left + 'px';
      // make visible
      card__popup.style.visibility = "visible";
    }
  })
}


window.addEventListener('resize', function(e) {
  if (window.innerWidth >=1000) {
    burger_navigation.className = 'burger__nav';
    this.document.querySelector('.header__burger').classList.toggle('burger_close');
  }
  card__popup.style.visibility = "hidden";
})