document.getElementById('show-menu').addEventListener('click', function () {
  document.getElementById('modal-menu').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function () {
  document.getElementById('modal-menu').style.display = 'none';
});

document
  .getElementById('modal-menu')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      this.style.display = 'none';
    }
  });
