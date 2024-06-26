const toggle = document.querySelector('.toggle');
const navItems = document.querySelectorAll('.nav-item');
const menu = document.querySelector('.menu');

let isThrottled = false;

const toggleMenu = () => {
  if (isThrottled) return;
  isThrottled = true;
  setTimeout(() => isThrottled = false, 300);

  navItems.forEach(item => item.classList.toggle('active'));
};

toggle.addEventListener('click', toggleMenu);

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-item')) {
    navItems.forEach(item => item.classList.remove('active'));
  }
});


/*new*/

/*end of new*/