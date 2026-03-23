/* ═══════════════════════════════════════════════
   NAV — scroll state
═══════════════════════════════════════════════ */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ═══════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════ */
const mobileMenu  = document.getElementById('mobileMenu');
const navToggle   = document.getElementById('navToggle');
const mobileClose = document.getElementById('mobileClose');

navToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', closeMobile);

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobile);
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════════════ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // fecha todos
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // abre o clicado (se estava fechado)
    if (!isOpen) item.classList.add('open');
  });
});

/* ═══════════════════════════════════════════════
   WHATSAPP FLUTUANTE — aparece e pulsa após 5s
═══════════════════════════════════════════════ */
const wppFloat = document.getElementById('wpp-float');

setTimeout(() => {
  wppFloat.classList.add('visible');
  setTimeout(() => wppFloat.classList.add('pulse'), 300);
}, 5000);

/* ═══════════════════════════════════════════════
   FORMULÁRIO DE CONTATO
═══════════════════════════════════════════════ */
const btnForm    = document.getElementById('btnForm');
const formEl     = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

btnForm.addEventListener('click', () => {
  const nome    = document.getElementById('f-nome').value.trim();
  const contato = document.getElementById('f-contato').value.trim();

  if (!nome || !contato) {
    alert('Por favor, preencha o nome e o contato antes de enviar.');
    return;
  }

  formEl.style.display = 'none';
  formSuccess.style.display = 'block';
});