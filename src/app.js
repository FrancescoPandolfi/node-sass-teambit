var $ = require ("jquery");

$(document).ready(function() {


  $(document).on('mouseenter', '.li-dropdown', function() {
    $(this).find('ul').addClass('dropdown');
  });
  $(document).on('mouseleave', '.li-dropdown', function() {
    $(this).find('ul').removeClass('dropdown');
  });


  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      console.log(scroll);

      if (scroll >= 400) {
          $('.menu-bar, nav, header').addClass('scrolled');
      }
      if (scroll < 400) {
        $('.menu-bar, nav, header').removeClass('scrolled');
      }
  });




});
