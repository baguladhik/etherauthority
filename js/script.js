// ===== NAVBAR ===== //
$(window).scroll(function() {
  
    let position    =   $(this).scrollTop();
      if (position >= 100) {
        $('.nav-menu').addClass('costum-navbar');
      } else {
        $('.nav-menu').removeClass('costum-navbar');
      }
    
  });
  
  