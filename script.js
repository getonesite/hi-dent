// Main JavaScript file for Hi Dent Dental Clinic
document.addEventListener('DOMContentLoaded', function () {

  // ===== Mobile Hamburger Menu =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (hamburger && mobileNav && mobileOverlay) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('active');
      if (isOpen) {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.add('active');
        mobileOverlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });

    mobileOverlay.addEventListener('click', function () {
      mobileNav.classList.remove('active');
      mobileOverlay.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });

    // Close mobile nav on link click
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Fade-in on Scroll =====
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFadeIn() {
    fadeElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  // Initial check
  checkFadeIn();

  // On scroll
  window.addEventListener('scroll', checkFadeIn);

  // ===== Active Nav Link =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta), .mobile-nav a:not(.nav-cta-mobile)');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== Simple Form Validation =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('formName');
      var phone = document.getElementById('formPhone');
      var message = document.getElementById('formMessage');
      var isValid = true;

      if (name && name.value.trim() === '') {
        isValid = false;
        name.style.borderColor = '#ef4444';
      } else if (name) {
        name.style.borderColor = '';
      }

      if (phone && phone.value.trim() === '') {
        isValid = false;
        phone.style.borderColor = '#ef4444';
      } else if (phone) {
        phone.style.borderColor = '';
      }

      if (isValid) {
        alert('Thank you for your message! We will contact you shortly.');
        contactForm.reset();
      }
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});