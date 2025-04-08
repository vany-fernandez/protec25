const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function handleScroll() {
    if (window.scrollY >= navOffsetTop) {
        nav.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px'; // Añadimos el alto del nav al body
    } else {
        nav.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0; // Quitamos el padding al volver arriba
    }
}

window.addEventListener('scroll', handleScroll);


//SLIDE 
document.querySelectorAll('.slideshow-bg').forEach(section => {
    const images = section.dataset.images.split(',');
    let current = 0;

    setInterval(() => {
      current = (current + 1) % images.length;
      section.style.backgroundImage = `url(${images[current]})`;
    }, 5000);
  });