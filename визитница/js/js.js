//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
    $('.slider_home').slick({
        centerPadding: '0px',
        dots: true
    });
     $('.content .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: true
    });
/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
$('.slider_service .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_service .slider-nav'
});
$('.slider_service .slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '0px',
  asNavFor: '.slider_service .slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
      {
          breakpoint: 481,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
      }
  ]
});
    
})


/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
/////////////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////
/////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////////
$(function(){
    
    $(".class").on("click", function(){
        $(".class").slideToggle();
        return false;
    })
    
    
    $(".open_mob_menu").on("click", function(){
        $(this).toggleClass("active").stop(3000000);
        $("header .row, .container").toggleClass("active");
        return false;
    })
    $(".slider-nav-parents .item").on("click", function(){
        $(".slider-nav-parents .item").addClass(".");
        return false;
    })
    
    
        
    
    
    
    
    
    
    
    
    if($(window).width() > 100){
        $(window).scroll(function() {
            var block_btn = $(".b_fix");
            var offset = block_btn.offset();
            if(offset.top <= 50){
                $("body").removeClass('scroll');
            }
            else {
                $("body").addClass('scroll');
            }
        });  
    };
   
})