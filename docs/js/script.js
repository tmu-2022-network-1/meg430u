window.onscroll = function(){  
  var scrollTop = window.pageYOffset ;  //スクロール量を代入する
  
  if (scrollTop == 0 ) {   //最上部に戻ってきた時
  $(".js-image").css('opacity', '1')
    $('.js-image').css('transition', '10s')
   
  
    $(".git-image").css('opacity', '0')
    $('.git-image').css('transition', '10s')
  }
  if (scrollTop > 2300 ) {   //１０pxスクロールした時
    $(".js-image").css('opacity', '0')
    $('.js-image').css('transition', '3s')

  
    $(".git-image").css('opacity', '1')
    $('.git-image').css('transition', '3s')
  }
  }

  