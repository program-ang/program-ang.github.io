/*--------sliding dropdown menu----------*/

   $('.dropdown').click(function(e) {
      $('.dropdown-menu').toggle('slow');
      e.preventDefault();
});