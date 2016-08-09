$(document).ready(function() {
  /* make the gradient 100vh without vh*/
    var $gradients = '.a, .b, .c, .d, .e, .f, .g, .h, .i';
    var $vhwindow = $(window).height();

    function gradientHeight(){
      $('.gradient').height($vhwindow);
      $($gradients).height($vhwindow);
    }

    gradientHeight();

    $(window).resize(function(){
      gradientHeight();
    });

    function gradientHeightClose(){
      $('.gradient').height('1rem');
      $($gradients).height('1rem');
    }

    $(window).bind('beforeunload', function(){
      gradientHeightClose();
    });
});
