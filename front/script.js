const toggle = document.querySelector('.toggle');
const navItems = document.querySelectorAll('.nav-item');

toggle.addEventListener('click', () => {
  navItems.forEach(item => item.classList.toggle('active'));
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
  });
});
