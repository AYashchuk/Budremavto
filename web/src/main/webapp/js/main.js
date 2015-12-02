/**
 * Created by admin on 15.07.2015.
 */

function hideInnerList() {
    var elNavbar = jQuery("#navbar");
    var ceInnerLists = elNavbar.find("UL");
    ceInnerLists.hide();
}
jQuery(document).ready(function(){

    var mainLinks = jQuery("#navbar > LI"); // главный список панели навигации
    var dopLinks = jQuery("#navbar LI > UL LI"); // дополнительный список в меню услуги


    // обработка событий дополнительного списка
    dopLinks.mouseenter( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        jQuery(this).addClass("hovered1");   // привязуем новый стелевой класс с именем "hovered"
    });
    dopLinks.mouseleave( function(event) {        // добавляем обработчик события убирается наведение мышкой - "mouseout"
        jQuery(this).removeClass("hovered1");
    });
    dopLinks.click(function(event) {		   // привязуем обработчик события щелчек левой кнопкой мышки
        event.stopPropagation();
        var A_UL = jQuery(this).find("A");
        jQuery(location).attr('href',A_UL.attr("href"));
    });




    // оброботка событий внешнего списка
    mainLinks.mouseenter( function(event) {	   // добавляем обработчик события наведение мышкой - "mouseover"
        jQuery(this).addClass("hovered2");   // привязуем новый стелевой класс с именем "hovered"
        jQuery(this).find("> A").addClass('Ahovered');
        var A_UL = jQuery(this).attr('id');
        if(A_UL == "list_product"){
            jQuery(this).children("LI UL").show(300);
        }
    });
    mainLinks.mouseleave( function(event) {        // добавляем обработчик события убирается наведение мышкой - "mouseout"

        jQuery(this).removeClass("hovered2");
        jQuery(this).removeClass("hovered_mousedown");
        jQuery(this).find("> A").removeClass('Ahovered');


        var A_UL = jQuery(this).attr('id');
        if(A_UL == "list_product"){
            jQuery(this).children("LI UL").hide(200);
        }
    });
    mainLinks.mousedown(function(event) {		   // привязуем обработчик события щелчек левой кнопкой мышки
        jQuery(this).addClass("hovered_mousedown");
    });
    mainLinks.mouseup( function(event) {        // добавляем обработчик события убирается наведение мышкой - "mouseout"
        var A_UL = jQuery(this).find("A");
        jQuery(this).removeClass("hovered_mousedown");
    });



    $(window).resize(function(){    // обработка событий при изменнение окна
        var width =  $(window).width();
        var height = $(window).height();
        var wrap = $('#wrap');
        wrap.css('left',width/2 -  wrap.width()/2 );


        var bottom = $('#bottom');
        bottom.css('top', (wrap.height()) - bottom.height());

    });

    hideInnerList();



});



