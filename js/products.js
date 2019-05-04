
$(function() {

  setTimeout("rect()", 4000); 
 
});

function rect() {
  $(".test").animate({
      left: "350px" //要素を動かす位置
  }, 3000)
}