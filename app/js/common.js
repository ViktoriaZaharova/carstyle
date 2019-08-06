$(document).ready(function () {

    // main slider
    $('.main__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    // main slider end


    // popular product slider
    $('.popular-product__slider').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // popular product slider end


    // photo-gallery__slider slider
    $('.photo-gallery__slider').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    // photo-gallery__slider slider end

    // image slider
    $('.product-image__slider').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    // image slider end


    // image modal
    $('.gallery-item').fancybox();
    // image modal end


    // mobile menu
    $('.burger-menu').click(function () {
        $('#overlay').fadeIn();
        $('#mobile-menu').animate({
            left: '0px'
        }, 300);
    });

    $('#mobile-menu .close, #overlay').click(function () {
        $('#mobile-menu').animate({
            left: '-100%'
        }, 400);
        $('#overlay').fadeOut();
    });
    // mobile menu end


    // mobile phone
    $('.btn-mobile-phone').click(function () {
        $('.phone-group').fadeToggle();
    });
    // mobile phone end

    // mobile filter
    $('.btn-filter-mobile').click(function () {
       $('.sidebar').slideToggle();
    });
    // mobile filter end


    // выпадающий список подбора по параметрам
    $('.select-box').click(function () {
        $(this).children('.dropdown-menu').fadeToggle();
        $(this).children('.btn-dropdown-menu').toggleClass('in');
    });
    // выпадающий список подбора по параметрам end

    // показать скрытые элементы списка
    $('.box-hover .btn-all').click(function (e) {
        e.preventDefault();
        $('.list-car-model li').slideDown();
        $(this).fadeOut();
    });
    // показать скрытые элементы списка end

    // открыть/закрыть фильтр
    $('.filter-box__title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        // $('.filter-box__title').not(this).removeClass('in').next().slideUp()
        // $(this).children('.filter-box .box-hover').fadeToggle();
    });
    // открыть/закрыть фильтр end


    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // tabs end


    // amount
    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // amount end


    // auto height
    $('.comparison-chars li, .news__item .news__item-title').equalHeights();
    // auto height end


    // ползунок цен
    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    // ползунок цен
});


// image min-max click
$(document).ready(function () {

    // var srcValue = $('.product-image__max img').attr('src');
    var penImg = $('.product-image__max img');

    $('.product-image__min div.item').on('click', function (e) {
        e.preventDefault();
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
    });

});
// image min-max click end


// modal popup
$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
// modal popup end
