//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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
    $('.slider_sth_directions').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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

/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////

    
})


/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
/////////////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////
/////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////////
$(function(){
    
    $(".class").on("click", function(){
        $(".class").slideToggle();
        return false;
    })
    
    $(".page_rates table tr td").hover( function(){
        var num=$(this).index();
        var row=$("tr").length;
        
        if (num == 0){}
        else{
            $(this).parent("tr").toggleClass("active");
            $(this).toggleClass("main_active");
            
            for ( var i=1; i<=row; i++){
                $("table tr").eq(i).find("td").eq(num).toggleClass("active");
            }  
        } 
    });
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