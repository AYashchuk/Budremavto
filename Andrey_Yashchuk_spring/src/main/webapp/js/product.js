/**
 * Created by admin on 23.07.2015.
 */
$(function(){
    $('.product').each(function(){
        $(this).animate({opacity:'1.0'},1); // В данной строке задаётся начальная прозрачность элемента.
        $(this).mouseover(function(){
            $(this).stop().animate({opacity:'0.9'},600); // В данной строке задаётся прозрачность элемента при наведении курсора.
        });
        $(this).mouseout(function(){
            $(this).stop().animate({opacity:'1.0'},300); // В данной строке задаётся прозрачность элемента при уходе курсора с элемента.
        });
    });
});
$(function(){
    var productDIVs = ('.product');

});