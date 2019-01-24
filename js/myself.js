

$(function() {

  $('#hobby').fadeOut(1);
  $('#work').fadeOut(1);
  $('#name').fadeOut(1);
  $('#recent').fadeOut(1);
  $('#histry').fadeOut(1);


  setTimeout(function(){
    $('#work').fadeIn(500);
  },200);

  setTimeout(function(){
    $('#hobby').fadeIn(500);
  },700);

  setTimeout(function(){
    $('#histry').fadeIn(500);
  },1200);
  
  setTimeout(function(){
    $('#recent').fadeIn(500);
  },1700);

  setTimeout(function(){
    $('#name').fadeIn(500);
  },2200);
});
