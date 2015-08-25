/**
 * Created by admin on 15.07.2015.
 */
jQuery(document).ready(function(){
    setPaddingTop();
    setTimeout(function() {
        setNewSize();
    },  200);
});


$(function(){


    jQuery("#list_do").addClass("hovered");
    jQuery("#list_do > A").css("color","#FFFFFF");

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



$(function(){

    //            var width = $(window).width();
    var cmain = $('#cmain');
    var height =   cmain.height() * 0.8;

    $('.main').css('height' , height);
    var action = $('.action');
    action.css('height', height/5);


    var Img = $('.action IMG');
    Img.css('height', height/5);
    action.css('height',Img.height() )


    $("#sendForm").click( sendForm );
    function sendForm(){

        var value = $('TEXTArea');
        var pass = $('#pass');



        var $input = $("#sendImg");
        var fd = new FormData;


        var val_pas = pass.val();
        var encodValue = encodeURIComponent(value.val());
        value.val('');
        pass.val('');


/*        fd.append('img', $input.prop('files')[0]);
        fd.append('pass',val_pas);
        fd.append('text',encodValue);*/
        $.post(
            "/myServlet",
            {
                processData: false,
                contentType: false,
//                data: fd,
                text:  encodValue,
                pass:val_pas,
                img: $input.prop('files')[0]
            },
            onAjaxSuccess
        );
    }

    function onAjaxSuccess(data)
    {
        // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
        $('.main').append(data);
    }
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




}
