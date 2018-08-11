'use strict';
//wszystkie metody/funkcje itd siedzą w tej funkcji poniżej
$(function () {

    //    alert('test');

    //    let paragraf = $('#paragraf').text("zmiana tekstu paragrafu");

    // w html/text musi być tekst by zadziałały metody before, prepend etc.

    let paragraf = $('#paragraf').html('<a href="#">link</a> do strony');
    //wywoływanie kilku styli w {}, wlasciwosc: wartosc , wszystko jako string w cudzyslowiu, po przecinku

    paragraf.css({
        "color": "lime",
        "font-size": "15px",
        "text-align": "right"
    });

    let inputKsywa = $("#ksywa");
    inputKsywa.val("łysy"); //ustawi w polu formularza wartosc (value)

    inputKsywa.addClass("in-ksywa czerwone"); //dodawanie klas

    inputKsywa.removeClass("czerwone"); //usuwanie klas

    //    paragraf.text(inputKsywa.val());//wstawia do paragrafu taki sam tekst jak w inpucie

    //    console.log();


});

//    console.log(paragraf);
