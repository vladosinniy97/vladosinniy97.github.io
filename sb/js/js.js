//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
    $('.slider_home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        arrows: false,
        dots: true
    });
/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////

    
})


/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
/////////////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////
/////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////////
$(function(){
    $(".wrapper_left nav ul li").on("click", function(){
        $(".class").slideToggle();
        return false;
    })
    $(".open_mob_menu").on("click", function(){
        $(this).toggleClass("active").stop(3000000);
        $("header .row, .container").toggleClass("active");
        return false;
    })
    ///////////////////////////////////////////////////
    $(".pay_parrents .btn").click(function(){
        $(".pay_parrents .more_click").addClass("active");
        return false;
    })
    $(".pay_parrents .cansel").click(function(){
        $(".more_click").removeClass("active");
        return false;
    })
    //////////////////////////////////////////////////
    $(".more_parrents .more").click(function(){
        $(this).next().addClass("active");
        return false;
    })
    $(".main_payout .item .more_parrents .more_window .cansel").click(function(){
        $(".main_payout .item .more_parrents .more_window").removeClass("active");
        return false;
    })
    $(".pay_parrents .cansel").click(function(){
        $(".more_click").removeClass("active");
        return false;
    })
    //////////////////////////////////////////////////
    $(".balance_parrents .main .item .btn.deposit").click(function(){
        $(".money_window").addClass("active");
        return false;
    })
    $(".balance_parrents .main .money_window .cansel").click(function(){
        $(".money_window").removeClass("active");
        return false;
    })
    //////////////////////////////////////////////////
    $(".bets_form .list .list_click").click(function(){
        $(".bets_form .list").addClass("active");
        return false;
    })
    $(".balance_parrents .main .money_window .cansel").click(function(){
        $(".money_window").removeClass("active");
        return false;
    })
    //////////////////////////////////////////
    $(".bets_form .list .list_click").click(function(){
        $(this).addClass("after");
        return false;
    })
    //////////////////////////////////////////
    $('.tab_quetions .item a').click(function(){
        var a = $(this).parent().hasClass("active");  
        $(".tab_quetions .item").removeClass("active");
        $(this).parent().addClass("active");   
        if (a == true) 
            $(this).parent().removeClass("active");  
        return false;
    }); 
    
    $(".parametr").on("click", function(){
        $(".bets_form .filter .item ul").hide();
        $(this).next().show();
            $('body').on("click", function () {
                $(".interior_design_page .filter .item ul").hide();
            });
        return false;
    })
    $(".select ul li a").on("click", function(){
        var a = $(this).text();
        if (a != "") $(this).parents(".select").find(".parametr").text(a);
        $(this).parents("ul").hide();
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