// const swiper = new Swiper('.swiper', {
//   loop: false,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   slidesPerView: 6,
//   spaceBetween: 48,
//   centeredSlides: false,
//   slideToClickedSlide: true,

//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1200: {
//       slidesPerView: 6,
//       spaceBetween: 48,
//     },
//   },
// });

// swiper.on('init', function () {
//   updatePagination(swiper);
// });

// function updatePagination(swiper) {
//   const pagination = swiper.pagination.bullets;
//   pagination.each((bullet, index) => {
//     if (index < swiper.slides.length) {
//       bullet.style.display = 'block';
//     } else {
//       bullet.style.display = 'none';
//     }
//   });
// }

// swiper.init();

const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 6,
  spaceBetween: 48,
  centeredSlides: true,
  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 48,
    },
  },
});

swiper.on('init', function () {
  updatePagination(swiper);
});

function updatePagination(swiper) {
  const pagination = swiper.pagination.bullets;
  pagination.each((bullet, index) => {
    if (index < swiper.slides.length) {
      bullet.style.display = 'block';
    } else {
      bullet.style.display = 'none';
    }
  });
}

swiper.init();
