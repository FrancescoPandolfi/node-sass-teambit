var $ = require ("jquery");

$(document).ready(function() {

  // Fa apparire il menù dropdown
  $(document).on('mouseenter', '.li-dropdown', function() {
    $(this).find('ul').addClass('dropdown');
  });
  $(document).on('mouseleave', '.li-dropdown', function() {
    $(this).find('ul').removeClass('dropdown');
  });

  $(document).on('click', '.hamburger', function() {
    $(this).siblings('.main-menu').toggleClass('open');
  });

  // Fa apparire la barra di navigazione dopo aver scrollato
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      console.log(scroll);

      if (scroll >= 350) {
          $('nav, .btn-sign').addClass('scrolled');
      }
      if (scroll < 350) {
        $('nav, .btn-sign').removeClass('scrolled');
      }

      if (scroll >= 80) {
          $('.menu-bar, nav, header').addClass('fixed');
      }
      if (scroll < 80) {
        $('.menu-bar, nav, header').removeClass('fixed');
      }
  });







});
