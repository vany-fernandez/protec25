document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('nav a');
  const navOffsetTop = nav.offsetTop;

  // ======= Ajuste padding inicial del body =======
  document.body.style.paddingTop = ${header.offsetHeight}px;

  // ======= NAVEGACIÓN FIJA AL HACER SCROLL =======
  function handleScroll() {
    if (window.scrollY >= navOffsetTop) {
      nav.classList.add('fixed-nav');
      document.body.style.paddingTop = ${nav.clientHeight}px;
    } else {
      nav.classList.remove('fixed-nav');
      document.body.style.paddingTop = ${header.offsetHeight}px;
    }
    nav.classList.remove('active'); // Cierra el menú en scroll
  }

  window.addEventListener('scroll', handleScroll);

  // ======= SLIDESHOW DE FONDO CON TRANSICIÓN =======
  document.querySelectorAll('.slideshow-bg').forEach(section => {
    const images = section.dataset.images?.split(',') || [];

    if (images.length === 0) return;

    let current = 0;
    section.style.backgroundImage = url(${images[current]});
    section.style.transition = 'background-image 1s ease-in-out';

    setInterval(() => {
      current = (current + 1) % images.length;
      section.style.backgroundImage = url(${images[current]});
    }, 5000);
  });

  // ======= MENÚ HAMBURGUESA =======
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
    }
  });
});
