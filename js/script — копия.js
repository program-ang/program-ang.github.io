var main = function() {

 /*--------Moving through the menu items-----------*/
  $('.menu li:not(.initial)').hover(
    function() {
    $(this).addClass('active');
    },
    function() {
    $(this).removeClass('active');
    }
   );

 /*--------Getting more text on small screens-----------*/ 
   $('div#further a').click(function() {
      $('.main p:nth-child(5)').slideToggle('slow');
      $('.main p:nth-child(6)').slideToggle('slow');
      return false;
});
 
/*--------Opening menu on small screens----------*/
 $('#menu-nest').click(function(e) {
      var m_width = $('.menu').width();
      $('.menu').animate({
         left: "-2px"
}, 500);
      $('body').animate({
          left: "{'m_width'}"
}, 500);
      e.preventDefault();
});

/*--------Closing menu on small screens----------*/
$('#menu-cls').click(function(e) {
      $('.dropdown-menu').hide('slow');
      $('.menu').animate({
         left: "-9999px"
}, 500);
      $('body').animate({
          left: "0px"
}, 500);
      e.preventDefault();
});

/*--------sliding dropdown menu----------*/

   $('.dropdown').click(function(e) {
      $('.dropdown-menu').toggle('slow');
      e.preventDefault();
});

}; //end of main function

$(document).ready(main);