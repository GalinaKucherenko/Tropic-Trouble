document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiperGallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
});
