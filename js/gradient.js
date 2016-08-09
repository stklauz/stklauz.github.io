$(document).ready(function() {
function classModifier(className){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass(className);
  $(this).siblings().addClass(className);
}

/*  $('.a').mouseenter(function(){
  classModifier('one');
  });
  $('.b').mouseenter(function(){
    classModifier('two');
  });
  $('.c').mouseenter(function(){
    classModifier('three');
  });
  $('.d').mouseenter(function(){
    classModifier('four');
  });
  $('.e').mouseenter(function(){
    classModifier('five');
  });
  $('.f').mouseenter(function(){
    classModifier('six');
  });
  $('.g').mouseenter(function(){
    classModifier('seven');
  });
  $('.h').mouseenter(function(){
    classModifier('eight');
  });
  $('.i').mouseenter(function(){
    classModifier('nine');
  });
});*/


$('.gradient').mouseleave(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('five');
  $(this).siblings().addClass('five');
});

$('.a').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('one');
  $(this).siblings().addClass('one');
});

$('.b').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('two');
  $(this).siblings().addClass('two');
});

$('.c').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('three');
  $(this).siblings().addClass('three');
});

$('.d').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('four');
  $(this).siblings().addClass('four');
});

$('.e').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('five');
  $(this).siblings().addClass('five');
});

$('.f').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('six');
  $(this).siblings().addClass('six');
});

$('.g').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('seven');
  $(this).siblings().addClass('seven');
});

$('.h').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('eight');
  $(this).siblings().addClass('eight');
});

$('.i').mouseenter(function(){
  var $classes = 'one two three four five six seven eight nine';
  $(this).removeClass($classes);
  $(this).siblings().removeClass($classes);
  $(this).addClass('nine');
  $(this).siblings().addClass('nine');
});
});
