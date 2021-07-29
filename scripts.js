const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.main-description');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})