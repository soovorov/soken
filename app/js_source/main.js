'use strict';
(() => {

  // Accordion
  const accordionBtn = document.getElementsByClassName('accordion-header');

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const accordionContent = this.nextElementSibling;
      accordionContent.classList.toggle('active');
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }

  // Side Menu
  // Вибірка посилань з меню
  const menuLinks = document.querySelectorAll('.anchor__trigger');

// Функція плавного скролу
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Плавний скрол
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('.anchor__item').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // Оновити активний елемент меню
    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });

})();
