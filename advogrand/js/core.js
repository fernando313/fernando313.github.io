$(document).ready(function () {
    $('.feedback-slider-item.active').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    autoplay: true

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
            }
        ]
    });


    // табы 

    $('.js-tab-trigger').on('click', function () {
        let tabName = $(this).data('tab');
        let tab = $('.js-tabs-content[data-tab="' + tabName + '"]');



        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tabs-content.active').removeClass('active');
        tab.addClass('active');
        $('.js-tabs-content.active').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    // готовый слайдер с партнерами
    $('.partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }
        ]
    });

    // модальные окна


    $('.recall-btn').on('click', function (e) {
        e.preventDefault();
        $('.recall-modal').fadeIn();
    });
    $('.recall-close').click(function (e) {
        e.preventDefault();
        $('.recall-modal').fadeOut();
    });
    
    
    $('.feedback-btn').on('click', function (e) {
        e.preventDefault();
        $('.feedback-modal').fadeIn();
    });
    $('.fb-modal-close').click(function (e) {
        e.preventDefault();
        $('.feedback-modal').fadeOut();
    });
});


