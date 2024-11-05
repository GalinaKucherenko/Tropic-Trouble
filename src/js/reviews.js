let swiper;

function initSwiper() {
  if (window.innerWidth < 1068 && !swiper) {
    swiper = new Swiper('.swiperGallery', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      slideToClickedSlide: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1068 && swiper) {
    swiper.destroy(true, true); // Повністю видаляє Swiper
    swiper = null;
  }
}

// Запускаємо Swiper при завантаженні сторінки
document.addEventListener('DOMContentLoaded', initSwiper);

// Відстежуємо зміну розміру екрану
window.addEventListener('resize', initSwiper);
