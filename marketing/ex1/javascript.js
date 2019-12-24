$(document).ready(function() {
  var bgh = $(window).height() - 150;
  $('.bg, .bg > div').height(bgh);
  var ct = $(window).height() * 0.5;
  $('.content').css('top', ct + 'px');
});

$(window).on("scroll touchmove", function () {
  $('body').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar-brand').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.logo').toggleClass('scrolled', $(document).scrollTop() > 0);
  $('.navbar-nav>li>a').toggleClass('scrolled', $(document).scrollTop() > 0);
});

$(window).scroll(function() {
  var ratio = $(window).height() / 2.5;
  var oVal = $(window).scrollTop() / ratio;
  $('.blur').css('opacity', oVal);
});