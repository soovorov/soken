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

  const anchorsList = document.querySelector('.anchor__list');
  let menuOffset = 0;

  if (window.innerWidth < 768 && anchorsList) {
    menuOffset = anchorsList.getBoundingClientRect().height;
  }

  // Click per menu item
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (window.innerWidth < 768) {
        window.scrollTo({
          top: targetSection.offsetTop - menuOffset + 5,
          behavior: 'smooth',
        })
      } else {
        // Scroll to the target
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Highlight section on scroll.
  window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('.anchor__item').forEach(section => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - menuOffset) {
        currentSection = section.getAttribute('id');
      }
    });

    // Оновити активний елемент меню
    menuLinks.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');

        if (window.innerWidth < 768) {
          anchorsList.scrollTo({
            left: link.offsetLeft,
            behavior: 'smooth',
          });
        }
      }
    });
  });

  // Mobile menu
  const menuToggleBtn = document.querySelector('.js-menu-toggle');
  const header = document.querySelector('.js-site-header');

  menuToggleBtn.addEventListener('click', e => {
    e.preventDefault();
    header.classList.toggle('show-menu');
    bodyScrollLock.disableBodyScroll(header);

    if (!header.classList.contains('show-menu')) {
      bodyScrollLock.enableBodyScroll(header);
    }
  });

  // Slider
  document.addEventListener('DOMContentLoaded', () => {
    let slider = null;

    function initSlider() {
      if (window.innerWidth < 768 && !slider) {
        slider = new Splide('#mobile-slider', {
          type: 'loop',
          fixedWidth : '320px',
          gap        : '20px',
          perPage: 1,
          pagination: true,
          arrows: false,
          autoplay: true,
        }).mount();
      } else if (window.innerWidth >= 768 && slider) {
        slider.destroy();
        slider = null;
      }
    }

    window.addEventListener('resize', initSlider);
    initSlider();
  });

  // Custom image replacement on member form.
  // @todo: Remove, only for the demo.
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
