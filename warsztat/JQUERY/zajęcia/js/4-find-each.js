'use strict';
//wszystkie metody/funkcje itd siedzą w tej funkcji poniżej
$(function () {

    //    alert('test');
    let elementBody = $("body"); //pobieramy body
    let paragrafy = elementBody.find('p') // z elementu body wyciagamy wszystkei paraggrafuy

    console.log(paragrafy.eq(0)); //eq(index) - jesli chcesz pobrac konkretny podajesz jego index zaczynajac od 0
    paragrafy.eq(2).css("color", "red");
    //    $('body').find('p')

    $('p').each(function (index) {
        $(this).addClass("klasa-" + index) //this = dla tego dla ktorego akurat cos robi petla
        //dodanie tekstu do kazdego paragrafu
        console.log($(this).text());
    }); //pobrane wszystkie paragrafy, wywolana na nich metoda each
});
