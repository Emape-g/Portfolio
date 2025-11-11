// Inicializar EmailJS
emailjs.init("TU_PUBLIC_KEY"); // Reemplazar con tu Public Key

// ===== ANIMACIÓN REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ===== MENÚ HAMBURGUESA =====
const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Cerrar menú al hacer clic en un link
navLinks.forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    to_email: 'emape.gianolini@gmail.com',
  };

  try {
    await emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams);
    statusMessage.textContent = '¡Mensaje enviado con éxito!';
    statusMessage.className = 'status-message success';
    statusMessage.style.display = 'block';
    contactForm.reset();

    setTimeout(() => statusMessage.style.display = 'none', 5000);
  } catch (error) {
    console.error('Error:', error);
    statusMessage.textContent = 'Error al enviar el mensaje. Intenta nuevamente.';
    statusMessage.className = 'status-message error';
    statusMessage.style.display = 'block';
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

