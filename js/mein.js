$(document).ready(function(){

  $('.header_banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows : false,
  });

  $('.products_slider_item').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
             {
              breakpoint: 815,
               settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                              }
                            },
              {
              breakpoint: 550,
               settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                              }
                            }
                            ]
  });


   $(".burger_line").click(function(event){
   $(".header_burger, .burger_line, .header_links").toggleClass("active");
  });

    $(document).mousedown(function(e) {
      if (!$('.burger_line, .header_link').is(e.target) && $('header_menu').has(e.target).length === 0) {
    $('.header_burger, .burger_line, .header_links').removeClass('active');
  }
  });

    $(".header_link").click(function(event){
   $(".header_burger, .burger_line, .header_links").toggleClass("active");
  });

  $(window).scroll(function() {
      $('.header_burger, .burger_line, .header_links').removeClass('active');
    });


});