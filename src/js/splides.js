if (document.querySelector(".splide")) {
  var mySlider = new Splide(".splide");
  mySlider.mount();
}

// // if (document.querySelector(".partners")) {
// //   var mySliderPartners = new Splide(".partners__slide", {
// //     // classes: {
// //     //   arrows: "splide__arrows partners__arrows",
// //     //   arrow: "splide__arrow partners__arrow",
// //     //   prev: "splide__arrow--prev partners__arrow--prev",
// //     //   next: "splide__arrow--next partners__arrow--next",
// //     // },
// //     perPage: 3,
// //     rewind: true,
// //     perMove: 1,
// //     gap: "5px",
// //   });
// //   mySliderPartners.mount();
// // }

const slider = document.querySelector(".partners__swiper-container");
const slider1 = document.querySelector(".gift-baskets__swiper-container");

let partnersSlider = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2.3,
    },
    1440: {
      slidesPerView: 2.7,
    },
  },
});

let giftbasketsSlider = new Swiper(slider1, {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      navigation: false,
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    484: {
      slidesPerView: 1.7,
      spaceBetween: 15,
    },
    672: {
      slidesPerView: 2.2,
    },
    980: {
      scrollbar: false,
      navigation: true,
      slidesPerView: 2.7,
    },
    1180: {
      slidesPerView: 3.2,
    },
    1440: {
      slidesPerView: 3.7,
      spaceBetween: 5,
    },
  },
});

const slider2 = document.querySelector(".products__swiper-container");
let glassesSlider = new Swiper(slider2, {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hide: true,
  },
  breakpoints: {
    525: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      scrollbar: false,
      navigation: true,
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});

const slider3 = document.querySelector(".gift-sets__slider-container");
let mySwiper;
function mobileSlider() {
  if (window.innerWidth <= 768 && slider3.dataset.mobile == "false") {
    mySwiper = new Swiper(slider3, {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      slideClass: "gift-sets__item",
      // pagination: {
      // 	el: '.swiper-pagination',
      // 	clickable: true,
      // },
    });

    slider3.dataset.mobile = "true";
  }

  if (window.innerWidth > 768) {
    slider3.dataset.mobile = "false";
    if (slider3.classList.contains("gift-sets__slider-container-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

// const sliders = document.querySelectorAll(".swiper");

// sliders.forEach((el) => {
//   let swiper = new Swiper(el, {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     loop: true,
//     pagination: {
//       el: el.querySelector(".swiper-pagination"),
//       clickable: true,
//     },
//     navigation: {
//       nextEl: el.querySelector(".swiper-button-next"),
//       prevEl: el.querySelector(".swiper-button-prev"),
//     },
//   });
// });
