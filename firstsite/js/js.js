//////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////
//////////////////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////
//////////////////SLIDER_SLIDER_SLIDER_SLIDER///////////////////////////////////////
$(document).ready(function(){
    $('.slider_home').slick({
        centerPadding: '0px',
        dots: true
    });
     $('.transfer .slider_tabl').slick({
        dots: false
         
    });
/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
$('.slider_travel .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider_travel .slider-nav'
});
$('.slider_travel .slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '0px',
  asNavFor: '.slider_travel .slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

/////////////////CODE_CODE_CODE_CODE_CODE_CODE_CODE_CODE_///////////////////////////
    $('.slider_number .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false,
          fade: true,
          asNavFor: '.slider_number .slider-nav'
        });
    $('.slider_number .slider-nav').slick({
          vertical: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: '0px',
          asNavFor: '.slider_number .slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        }); 
    $('.slider_number_vn .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false,
          fade: true,
          asNavFor: '.slider_number_vn .slider-nav'
        });
    $('.slider_number_vn .slider-nav').slick({
          vertical: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: '0px',
          asNavFor: '.slider_number_vn .slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
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
    
    
    $('.transfer .car').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: true,
        dots: false
    });
        
    
    
    
    
    
    
    
    
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
    
    if($(window).width()<992){
           $('.blog .main').slick({
               dots: false,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               responsive: [
                   {
                breakpoint: 767,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                   }
               ]
            });
       };
    if($(window).width()<992){
           $('.blog_home .main').slick({
               dots: false,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               responsive: [
                   {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                   }
               ]
            });
       };
    function Calendar2(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    calendar += '<td>' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}
   
})