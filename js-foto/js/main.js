;(function($){

    // $('.library').slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     infinity: true,
    //     dots: false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: false
    // });


    $('.item').magnificPopup({
        type : 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery : {
            enabled : true
        }
    });
    $('.button1').magnificPopup();
    $('#form').submit(function () {
        $.ajax({
            typw : post,
            url : 'mail.php',
            data : $(this).serialize()
        }).done(function () {
            alert('Спасибо за отзыв!');
            setTimeout(function () {
                $.magnificPopup.close();
            }, 1000);
        });
    });
})(jQuery);