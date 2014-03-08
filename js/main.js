$(function(){
  var win_height = $(document).height();
  var height = $('.site-title').height();
  $('.site-title').css({'margin-top': win_height/2-height});
  setTimeout(function(){
    $('.site-title').animate({'margin-top': 0},500,function(){
      $('.underline-title').animate({opacity: 1},500);
      $('.main-area,.times,.address').animate({opacity: 1},500);
    });
  },750);
});
