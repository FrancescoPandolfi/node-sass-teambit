var $ = require ("jquery");

$(document).ready(function() {

$('.li-dropdown').click(function() {
  console.log('hover');
});


  $(document).on('mouseenter', '.li-dropdown', function() {
    $(this).find('ul').addClass('dropdown');
  });
  $(document).on('mouseleave', '.li-dropdown', function() {
    $(this).find('ul').removeClass('dropdown');
  });

});
