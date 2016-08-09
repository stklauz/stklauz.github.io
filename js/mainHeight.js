$(document).ready(function() {
  /* make main full screen*/
  var $main = $('main');
  var $windowHeight = $(window).height();
  var $gradientHeight= $('.gradient').height();
  var $a = $('.post-list a');
  var $content = $('.post-content');

  function mainHeight(){
    if (($main.outerHeight()) < ($windowHeight)){
      $main.outerHeight($windowHeight - ($gradientHeight));
    } else {
      $main.outerHeight('auto');
    }
  }

  mainHeight();
  $(window).resize(function(){
    mainHeight();
  });

  $a.on('click', function(){
      if($(this).siblings().css('display') == 'none'){
        $(this).siblings().slideDown();
        $main.outerHeight('auto');
      } else {
        $(this).siblings().slideUp();
        $main.outerHeight($windowHeight - ($gradientHeight));
      }

  });
});
