document.addEventListener('DOMContentLoaded', () => {
  const itemsToAnimate = document.querySelectorAll('.instruction-item');

  function animateOnScroll() {
    itemsToAnimate.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3; //

      if (itemPosition < screenPosition) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
