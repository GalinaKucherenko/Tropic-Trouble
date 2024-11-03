document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function () {
    const faqItem = this.parentElement;
    const answer = faqItem.querySelector('.faq-answer');

    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
      answer.style.padding = '16px';
    } else {
      answer.style.padding = '0';
    }
  });
});
