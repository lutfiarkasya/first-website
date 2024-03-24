const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.nav ul');
const sidebar = document.querySelector('.sidebar ul');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-button');
const close = document.querySelector('.close');
const hero = document.querySelector('.hero-section');

menu.addEventListener('click', () => {
  nav.style.display = 'hidden';
  menuBtn.style.opacity = '0';
  sidebar.style.display = 'flex';

  // navbar.classList.add('nav-up');
});
sidebar.addEventListener('click', () => {
  nav.style.display = 'flex';
  sidebar.style.display = 'none';
  menuBtn.style.opacity = '1';
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const hrefAttr = link.getAttribute('href');

    if (hrefAttr === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (hrefAttr !== '#' && hrefAttr.startsWith('#')) {
      const sectionEl = document.querySelector(hrefAttr);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const navTog = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    navTog.classList.add('active');
  } else {
    navTog.classList.remove('active');
  }
}
