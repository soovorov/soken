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
  // Select side menu links
  const menuLinks = document.querySelectorAll('.anchor__trigger');

  // Click per menu item
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Highlight section on scroll.
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

  // Custom image replacement on member form, only for the demo [Remove later]
  const form = document.querySelector('.form');
  const formImg = document.querySelector('.status-image');
  const formContainer = document.querySelector('.verify-form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Simulate success submit
      formImg.src = './images/member/success.svg';
      formContainer.classList.add('submit-success');
    });
  }

})();
