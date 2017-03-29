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

var wdth = $('.main').innerWidth(); 
if (wdth > 732) {
      $('.main p:nth-child(5)').attr("display", "block");	  
      $('.main p:nth-child(6)').attr("display", "block");
};

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