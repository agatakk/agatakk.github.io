'use strict';
//wszystkie metody/funkcje itd siedzą w tej funkcji poniżej
$(function () {

    $('p').click(function () {
        $(this).css("color", "orange"); // ten paragraf ktory kliknieto - zmienia sie na pomaranczowy po kliknieciu
    })

    $('p').on({
        'mouseenter': function () {
            $(this).css("color", "hotpink");
        },

        'mouseleave': function () {
            $(this).css("color", "black");
        },

        'click': function () {
            $(this).css("color", "green");
        }
    })
//$('h3').on({
//    'click': function () {
//        $(this).css("color", "orange");
//    },
//    'dbclick': function () {
//        $(this).css("color", "red");
//    },
//    'mouseleave': function () {
//        $(this).css("color", "green");
//    },
//    'mouseenter': function () {
//        $(this).css("color", "lime");
//    };
//
//

});






