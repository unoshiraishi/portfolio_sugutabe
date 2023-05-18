$(function(){

  // slider.js
  $('.js-slider-farmers').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.js-slider-voice').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // accordion
  $('.top-faq-item-text--question').on('click', function() {
    $(this).next('.top-faq-item-hidden-area').slideToggle();
    $(this).toggleClass('close');
  });

  //hamberger menu
  const hamburger = document.querySelector('.header-openbtn');
  const spMenu = document.querySelector('.sp-menu-drawer');
  const spMenuMask = document.querySelector('.sp-menu-drawer-mask');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  function disableTouchScroll() {
    window.addEventListener('touchmove', e => e.preventDefault());
  }

  function ableTouchScroll() {
    window.removeEventListener('touchmove', e => e.preventDefault());
  }

  hamburger.addEventListener('click', () => {
    if(spMenu.classList.contains('show')){
        spMenu.classList.remove('show');
        spMenuMask.classList.remove('show');
        hamburger.classList.remove('active');
        html.classList.remove('not-scroll');
        body.classList.remove('not-scroll');
        ableTouchScroll();
    } else {
        spMenu.classList.add('show');
        spMenuMask.classList.add('show');
        hamburger.classList.add('active');
        html.classList.add('not-scroll');
        body.classList.add('not-scroll');
        disableTouchScroll();
    }
  });

  spMenuMask.addEventListener('click', () => {
    hamburger.click();
  });
});

