/**
 * Created by admin on 15.07.2015.
 */

$(function(){
    setPaddingTop();
    $.ajax({
        url: 'content/product.html', // указываем URL и
        async:false,
        dataType: "html", // тип загружаемых данных
        success: function (data) {
            // вешаем свой обработчик события success
            $("#cmain").html(data);
            setTimeout(function() {
                setNewSize();
            },  400);
        }
    });

    jQuery("#list_product").addClass("hovered");
    jQuery("#list_product > A").css("color","#FFFFFF");

    $('#navbar >').click(function(){
        var linkname = $(this).attr('id');
        var link = 'content/' + linkname.substring(5) + '.html' ;
        if(link == "content/index.html"){
            jQuery(location).attr('href','index.jsp');
        }if(link == "content/do.html"){
            jQuery(location).attr('href','myServlet');
        }else{
            $.ajax({
                url: link, // указываем URL и
                async:false,
                dataType: "html", // тип загружаемых данных
                success: function (data) {
                    // вешаем свой обработчик события success
                    $("#cmain").html(data);
                    setTimeout(function() {
                        setNewSize();
                    },  300);


                }
            });
            var currentLink = $('.hovered')
            currentLink.removeClass('hovered');
            currentLink.find('A').css("color","#000000");
            $(this).addClass('hovered');
            $(this).find('A').css("color","#FFFFFF");
        }
    });
});

function setPaddingTop(){
    var width =  $(window).width();
    var wrap = $('#wrap');
    wrap.css('left',width/2 -  wrap.width()/2 );
}

function setNewSize(){
    var width =  $(window).width();
    var height = $(window).height();
    var wrap = $('#wrap');


    var bottom = $('#bottom');
    bottom.css('top', wrap.height()- bottom.height()  );


    var height = $('.product >').last();
    $('.product >').css('height',    height.height() );


}
