

$(document).ready(function() {
  $('header ul li:first-child').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
});
