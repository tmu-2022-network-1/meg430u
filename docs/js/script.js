window.onscroll = function(){  
  var scrollTop = window.pageYOffset ;  
  
  if (scrollTop == 0 ) {   
  $(".off-image").css('opacity', '1')
    $('.off-image').css('transition', '10s')
    
   
  
    $(".on-image").css('opacity', '0')
    $('.on-image').css('transition', '20s')
    $(".box p2").css('opacity', '1')
    $('.box p2').css('transition', '0.5s')
    
  }
  
  if (scrollTop > 1800 ) {   
    $(".off-image").css('opacity', '0')
    $('.off-image').css('transition', '3s')
    $(".box p").css('opacity', '0')
    $('.box p').css('transition', '0.5s')
  
    $(".on-image").css('opacity', '1')
    $('.on-image').css('transition', '3s')
    
   
  }
  }

  