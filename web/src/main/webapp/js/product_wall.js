/**
 * Created by admin on 15.07.2015.
 */

// функция настраивает стену услуг, и определяет ее поведение
$(function(){
    var product_1 = jQuery("#product_wall > DIV >");
    var product_wall_divs = jQuery(".wall_text");


    // обработчик событий стены услуги
    product_1.mouseenter( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        jQuery(this).find("P").slideDown(200);
    });
    // обработчик событий стены услуги
    product_1.mouseleave( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        jQuery(this).find("P").slideUp(400);
    });


    // добавляем обраотчик собития на наведение
    product_wall_divs.mouseenter( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        var text_div = jQuery(this);
        var image_div = jQuery(this).siblings();

        image_div.animate({'width':  '40%'},200);
        text_div.animate({'width':  '56%'},200);
        jQuery(this).find("P").slideDown(300);

    });

    product_wall_divs.mouseleave( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        var text_div = jQuery(this);
        var image_div = jQuery(this).siblings();
        text_div.animate({'width':  '36%'},100);
        image_div.animate({'width':  '60%'},100);
       jQuery(this).find("P").slideUp(300);
    });



});
// скрывает текст в div-ах с id wall_text
$(function(){
    var product_wall = jQuery("#product_wall");
    var massP = product_wall.find("P");
    massP.hide();
});
$(function(){
    var cmain = jQuery("#cmain");
    var product_wall = $('#product_wall');


    cmain_width = cmain.width();
    product_wall.css('padding-left', cmain_width * 0.01);
    product_wall.css('padding-right', 0);
    console.log(cmain_width * 0.04);
});

$(function(){
    $('#slider').each(function(){
        $(this).animate({opacity:'1.0'},1); // В данной строке задаётся начальная прозрачность элемента.
        $(this).mouseover(function(){
            $(this).stop().animate({opacity:'0.9'},600); // В данной строке задаётся прозрачность элемента при наведении курсора.
        });
        $(this).mouseout(function(){
            $(this).stop().animate({opacity:'1.0'},300); // В данной строке задаётся прозрачность элемента при уходе курсора с элемента.
        });
    });
});
