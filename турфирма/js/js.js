//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
     
 
    
    

 
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
     $('.home .slider_home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: true,
        dots: true
    });
    ////////////////////////////////////////////////
    $('.slider_bron .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false,
          fade: true,
          asNavFor: '.slider_bron .slider-nav'
        });
    $('.slider_bron .slider-nav').slick({
          vertical: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: '0px',
          asNavFor: '.slider_bron .slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        }); 
    ////////////////////////////////////////////
    $("select_inp .dop").on("click", function(){
        $(".label_check").addClass("active");
        return false;
    })
    $("select_inp .dop").on("click", function(){
        $(".label_check").removeClass("active");
        return false;
    })
    
    if($(window).width() > 100){
        $(window).scroll(function() {
            var block_btn = $(".b_fix");
            var offset = block_btn.offset();
            if(offset.top <= 10){
                $("body").removeClass('scroll');
            }
            else {
                $("body").addClass('scroll');
            }
        });  
    };
    
    
    
    
    
    
    
});