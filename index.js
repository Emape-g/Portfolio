// Menú hamburguesa
const navToggle = document.querySelector('.header__nav-toggle');
const navList = document.querySelector('.header__nav-list');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('header__nav-list--active');
});

// Animación fade-in con Intersection Observer
const sections = document.querySelectorAll('.section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observerSelf) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
      observerSelf.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Formulario contacto - demo
const contactoForm = document.querySelector('.contacto__form');

contactoForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias por tu mensaje, Emanuel lo recibirá pronto.');
  contactoForm.reset();
});