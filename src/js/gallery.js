document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiperGallery', {
    navigation: {
      nextEl: '.gallery-arrow-next',
      prevEl: '.gallery-arrow-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });
});
