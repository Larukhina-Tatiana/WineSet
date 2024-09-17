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
  slidesPerView: 2.5,
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
    576: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
  },
});

let giftbasketsSlider = new Swiper(slider1, {
  slidesPerView: 3.9,
  // spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   576: {
  //     slidesPerView: 2,
  //   },
  //   868: {
  //     slidesPerView: 3,
  //   },
  // },
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
