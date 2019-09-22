$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без Скинали', // Set a custom before label
        after_label: 'Со Скинали', // Set a custom after label
    });
    $(".before-slider").slick({
        draggable: false, //отключение тача
        dots: true,
        swipe: false,
        dotsClass: 'before-slider__dots',        //кнопки
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $(".reviews-slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.arrow-left'),
            nextArrow: $('.arrow-right'),
            responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
              ]
            });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');

    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -120 + "px"});
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99")
    /*показывать карту при докрутке*/
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0769a55025f06cbe3de8c9fa93a69870507d813d485ab8f98a1f8e7b9fcb24c0&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>'
            )
            $(window).unbind('scroll')
        }
    })
});
