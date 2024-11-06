document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 48,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 48,
        initialSlide: 2,
      },
    },
  });
});
