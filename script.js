
var scrollIsVisible = true;
$(window).scroll(function() {
  if ($(window).scrollTop() == 0) {
    scrollIsVisible = true;
    $(".ge-scroll").fadeIn(300);
  } else {
    scrollIsVisible = false;
    $(".ge-scroll").fadeOut(300);
  }
});

eee();
window.setInterval(eee, 1250);
function eee() {

  if (scrollIsVisible) {
    
    
   $(".ge-scroll").animate({top: '-=5vh' }, "medium");
   $(".ge-scroll").animate({top: '+=10vh'}, "medium");
   $(".ge-scroll").animate({top: '-=5vh'}, "medium");
  } else {
    $(".ge-scroll").setVisible(false);
  }
}


