// document.getElementById('show-menu').addEventListener('click', function () {
//   document.getElementById('modal-menu').style.display = 'block';
// });

// document.getElementById('close-modal').addEventListener('click', function () {
//   document.getElementById('modal-menu').style.display = 'none';
// });

// document
//   .getElementById('modal-menu')
//   .addEventListener('click', function (event) {
//     if (event.target === this) {
//       this.style.display = 'none';
//     }
//   });

// document.querySelectorAll('.list-modal-nav a').forEach(link => {
//   link.addEventListener('click', function () {
//     document.getElementById('modal-menu').style.display = 'none';
//   });
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const openMenuButton = document.getElementById('show-menu');
//   const closeMenuButton = document.getElementById('close-modal');
//   const modalMenu = document.getElementById('modal-menu');
//   const footer = modalMenu.querySelector('.footer-container');

//   const setFooterPosition = () => {
//     footer.style.position = 'absolute';
//     footer.style.bottom = '0';
//     footer.style.left = '0';
//   };

//   openMenuButton.addEventListener('click', () => {
//     modalMenu.style.display = 'flex';
//     setFooterPosition();
//   });

//   closeMenuButton.addEventListener('click', () => {
//     modalMenu.style.display = 'none';
//   });

//   window.addEventListener('resize', () => {
//     if (modalMenu.style.display === 'flex') {
//       setFooterPosition();
//     }
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.getElementById('show-menu');
  const closeMenuButton = document.getElementById('close-modal');
  const modalMenu = document.getElementById('modal-menu');
  const footer = modalMenu.querySelector('.footer-container');

  const setFooterPosition = () => {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.left = '0';
  };

  openMenuButton.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
    setFooterPosition();
  });

  closeMenuButton.addEventListener('click', () => {
    modalMenu.style.display = 'none';
  });

  modalMenu.addEventListener('click', event => {
    if (event.target === modalMenu) {
      modalMenu.style.display = 'none';
    }
  });

  document.querySelectorAll('.list-modal-nav a').forEach(link => {
    link.addEventListener('click', () => {
      modalMenu.style.display = 'none';
    });
  });

  window.addEventListener('resize', () => {
    if (modalMenu.style.display === 'flex') {
      setFooterPosition();
    }
  });
});
