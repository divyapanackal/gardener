$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  });
  $('.mobile-menu').click(function(e){
      e.preventDefault();
    $('#header').toggleClass('open');
});
});
