/**
 * Created by admin on 15.07.2015.
 */
// метод загрузки контента с сервера
$(function(){
    setPaddingLeft(); // поскольку значение wrap задано и зависит от шырины екрана то сразу можем выстовить wrap по центру экрана
    // для этого находим шырину экрана и отнимаем пол шырины wrap
    // делаем запрос на сервер на получение
    $.ajax({
        url: 'content/index.html', // указываем URL и
        async:false,
        dataType: "html", // тип загружаемых данных
        success: function (data) {  // обраотчик успешной передачи запроса на сервер
            // вешаем свой обработчик события success
            $("#cmain").html(data); // выводим в div с id=cmain полученый с сервера html код
            setTimeout(function() { // поскольку запрос асинхронный то ждем 400 мс для того что б точно сервер успел прогрузить html код
                setNewSize();       // после прошрузки устанавливаем нижний div с низу
                onSlider();         // настраиваем и включаем прогруженый слайдер
            },  400);
        }
    });

    jQuery("#list_index").addClass("hovered");   // привязываем стелевой клас к текушей страницы в панели навигации
    jQuery("#list_index").find("A").css("color","#FFFFFF"); // привязываем стелевой клас к текушей ссылке в панели навигации

    $('#navbar >').click(function(){                 // обработчик щелчка в панели навигаций
        var linkname = $(this).attr('id');
        var link = 'content/' + linkname.substring(5) + '.html' ; // формируем сслыку
        if(link == "content/product.html"){                                              //    если ссылка на страницу услуги
            jQuery(location).attr('href','product.jsp');    // загружаем страницу услуги
        }if(link == "content/do.html"){                                              //    если ссылка на страницу услуги
            jQuery(location).attr('href','myServlet');    // загружаем страницу услуги
        }else{         // если ссылка не на страницу услуги
            $.ajax({                                // формируем запрос на сервер для подгрузки контента
                url: link,                          // указываем URL и
                dataType: "html",                   // тип загружаемых данных
                async:false,
                success: function (data) {
                    // вешаем свой обработчик события success
                    $("#cmain").html(data);          // выводим в div с id=cmain полученый с сервера html код
                    setTimeout(function() {
                        setNewSize();
                        if(link == 'content/index.html'){  // проверяем, если мы подгружаем главную страницу, то надо перенастроить слайдер
                            onSlider();                    // перенастраиваем слайдер
                        }
                    },  300);
                }
            });
            var currentLink = $('.hovered');                // привязываем стеолевой клас к нужной ссылке в панели нагации
            currentLink.removeClass('hovered');
            currentLink.find('A').css("color","#000000");   //    -||-
            $(this).addClass('hovered');                    //    -||-
            $(this).find('A').css("color","#FFFFFF");       //    -||-
        }

    });
});

// функция здвигает div с id wrap на центр экрана
function setPaddingLeft(){
    var width =  $(window).width();
    var wrap = $('#wrap');
    wrap.css('left',width/2 -  wrap.width()/2 );
}

// метод определяет положение div c id bottom с низу страницы
function setNewSize(){
    var width =  $(window).width();
    var height = $(window).height();
    var wrap = $('#wrap');


    var bottom = $('#bottom');
    bottom.css('top', wrap.height()- bottom.height()  );


}

// метод настраивает слайдер с учетом текущих размеров страницы, и активизирует его
function onSlider(){
    var width = $('#slider').width();
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;


    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var interval;
    function startSlider(){
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+ width},animationSpeed, function(){
                currentSlide++;
                if(currentSlide == $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left',0);
                }

            });
            //console.log(new Date());
        },pause);
    }

    function stopSlider(){
        clearInterval(interval);
    }

    $slider.on('mouseenter',stopSlider).on('mouseleave', startSlider);
    startSlider();
}
