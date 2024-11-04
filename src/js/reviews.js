const swiper = new Swiper('.swiperGallery', {
  slidesPerView: 1, // Показувати один слайд за раз
  spaceBetween: 0, // Немає проміжків між слайдами
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
