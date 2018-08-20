'use strict';
//wszystkie metody/funkcje itd siedzą w tej funkcji poniżej
$(function () {

    //    $('p').hide(3000).show(3000);
    $('h2').click(function () {
        //        $(this).fadeOut(3000).fadeIn(3000) //przyjmuje tylko milisekundy
        $(this).slideUp(3000).slideDown(3000);
    })

    function zakonczonaAnimacja1() {
        $('h3').animate({
                'font-size': "1em",
                'margin-left': "0px"
            },
            2000,
        );

    };


    $('h3').animate({
            'font-size': "3em",
            'margin-left': '100px',

        },
        2000,
        zakonczonaAnimacja1
    );


});
