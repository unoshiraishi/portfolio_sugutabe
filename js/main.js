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
  $(".header-openbtn").click(function(){
    $(this).toggleClass('active');
    $(".header-nav").toggleClass('active-menu');

    $('.header-nav-item').click(function(){
      $(".header-openbtn").removeClass('active');
      $(".header-nav").removeClass('active-menu');
    });
  });

  const wintop = $(window).scrollTop();

  $(window).on('scroll', function () {
    if ( $(".header-openbtn").hasClass('active') && wintop != $(window).scrollTop() ) {
      $(".header-openbtn").removeClass('active');
      $(".header-nav").removeClass('active-menu');
    }
  });
});

