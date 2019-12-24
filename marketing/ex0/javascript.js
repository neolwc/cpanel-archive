$(document).ready(function() {
  var bgh;
  bgh = $(window).height() - 100;
  $('.bg, .bg > div').height(bgh);
});

$(window).on("scroll touchmove", function () {
  $('body').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar-brand').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.logo').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar-nav>li>a').toggleClass('scrolled', $(document).scrollTop() > 0);
});

$(window).scroll(function() {
  var ratio;
  var oVal;
  ratio = $(window).height() / 2;
  oVal = $(window).scrollTop() / ratio;
  $('.blur').css('opacity', oVal);
});