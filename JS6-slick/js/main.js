;(function ($) {
    $(function () {
        $('.slide-contein').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinity: true,
            dots: false,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            //adaptiveHeight: true,
            //centerPadding: '60px',
            //variableWidth: true
            responsive:[
                {
                    breakpoint: 1400,
                    settings: {
                        autoplay: false,
                        autoplaySpeed: 2000,
                        infinity: true,
                        dots: false,
                        slidesToShow: 2,
                        centerMode: false,
                        slidesToScroll: 1,
                        //adaptiveHeight: true,
                        //centerPadding: '60px',
                        //variableWidth: true
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })

    });
})(jQuery);