//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
    $('.slider_home').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
             {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
        ]
    });
    if($(window).width()<992){
           $('.prognozist').slick({
               dots: false,
               infinite: true,
               speed: 300,
               slidesToShow: 3,
               slidesToScroll: 1
            });
       };
    
        
});


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
    
    
    
    
    
    
    
})