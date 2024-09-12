if (document.querySelector(".splide")) {
  var mySlider = new Splide(".splide");
  mySlider.mount();
}

// if (document.querySelector(".partners")) {
//   var mySliderPartners = new Splide(".partners__slide", {
//     // classes: {
//     //   arrows: "splide__arrows partners__arrows",
//     //   arrow: "splide__arrow partners__arrow",
//     //   prev: "splide__arrow--prev partners__arrow--prev",
//     //   next: "splide__arrow--next partners__arrow--next",
//     // },
//     perPage: 3,
//     rewind: true,
//     perMove: 1,
//     gap: "5px",
//   });
//   mySliderPartners.mount();
// }

const partnersSlider = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev",
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
