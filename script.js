// ======= NAVEGACIÓN FIJA AL HACER SCROLL =======
const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function handleScroll() {
  if (window.scrollY >= navOffsetTop) {
    nav.classList.add('fixed-nav');
    document.body.style.paddingTop = `${nav.clientHeight}px`; // Usamos clientHeight por precisión
  } else {
    nav.classList.remove('fixed-nav');
    document.body.style.paddingTop = '0';
  }
}

window.addEventListener('scroll', handleScroll);


// ======= SLIDESHOW DE FONDO CON TRANSICIÓN =======
document.querySelectorAll('.slideshow-bg').forEach(section => {
  const images = section.dataset.images?.split(',') || [];

  if (images.length === 0) return;

  let current = 0;
  section.style.backgroundImage = `url(${images[current]})`; // Imagen inicial
  section.style.transition = 'background-image 1s ease-in-out'; // Transición suave

  setInterval(() => {
    current = (current + 1) % images.length;
    section.style.backgroundImage = `url(${images[current]})`;
  }, 5000);
});

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  document.body.style.paddingTop = ${header.offsetHeight}px;
});
// ======= MENÚ HAMBURGUESA =======
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
  
    // Alternar visibilidad del menú
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click se propague y lo cierre al instante
      nav.classList.toggle('active');
    });
  
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  
    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
      nav.classList.remove('active');
    });
  
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
      }
    });
  });


  
