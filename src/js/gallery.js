document.addEventListener('DOMContentLoaded', function () {
  let initialSlide = 0;

  if (window.innerWidth >= 1200) {
    initialSlide = 2;
  }

  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: window.innerWidth >= 1200 ? 6 : 3,
    spaceBetween: 48,
    centeredSlides: true,
    slideToClickedSlide: true,
    initialSlide: initialSlide,

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

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1200) {
      swiper.params.slidesPerView = 6;
      swiper.params.initialSlide = 2;
    } else {
      swiper.params.slidesPerView = 3;
      swiper.params.initialSlide = 0;
    }
    swiper.update();
  });
});
