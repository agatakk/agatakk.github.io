'use strict';
//wszystkie metody/funkcje itd siedzą w tej funkcji poniżej
$(function () {
    let imie = $('#imie');
    let nazwisko = $('#nazwisko');
    let ulica = $('#ulica');
    let nrDomu = $('#nrdomu');
    let kod = $('#kod');
    let miasto = $('#miasto');
    let pizza = $("#pizza");
    let sosy = $('.sosy');
    let agreement = $('#agreement');
    let formularz = $('#formularz');
    let bledy = $('#bledy');
    let pom = $('#pomidorowy');
    let czosn = $('#czosnkowy')


    //    console.log(imie, nazwisko, ulica, nrdomu, kod, miasto, pizza, sosy, agreement);

    let priceTable = [
        {
            id: 1,
            price: 35,
        },
        {
            id: 2,
            price: 45,
        },
        {
            id: 3,
            price: 55,
        },
        {
            id: 4,
            price: 35,
        },
        {
            id: 5,
            price: 25,
        },
    ]



    pizza.change(function () {
        let pizzaPrice = 0;


        let pizzaType = $(this).val();

        priceTable.forEach(function (element) {
            console.log(pizzaType);
            if (pizzaType == element.id) {
                $('#pricing').text(element.price);
            }
        })



    });

    formularz.submit(function () {

        let liTekstBledy = [];

        bledy.empty();

        if ($.trim(imie.val()) === "") {
            liTekstBledy.push('Uzupełnij pole imie');
        };
        if ($.trim(nazwisko.val()) === "") {
            liTekstBledy.push('Uzupełnij pole nazwisko');
        };
        if ($.trim(ulica.val()) === "") {
            liTekstBledy.push('Uzupełnij pole ulica');
        };
        if ($.trim(nrDomu.val()) === "") {
            liTekstBledy.push('Uzupełnij pole Nr domu');
        };
        if ($.trim(kod.val()) === "") {
            liTekstBledy.push('Uzupełnij pole Kod pocztowy');
        };
        if ($.trim(miasto.val()) === "") {
            liTekstBledy.push('Uzupełnij pole Miasto');
        };

        if (!agreement.is(":checked")) {
            liTekstBledy.push('Zaznacz pole wyrażam zgodę');
        };
        if (pizza.val() == "0") {
            //            console.log(pizza.val());
            liTekstBledy.push('Wybierz pizzę');
        }

        console.log(liTekstBledy);

        if (liTekstBledy.length > 0) {

            liTekstBledy.forEach(function (element) {
                let liBlad = '<li>' + element + '</li>';
                bledy.append(liBlad);
                //                console.log(element);
            })


        }

        console.log(liTekstBledy);

        let objJSON = {};

        let poleText = $('[type="text"]');
        let klucz = "";
        let wartosc = "";

        console.log(poleText);

        poleText.each(function () {
            klucz = $(this).attr("id");
            wartosc = $(this).val();
            objJSON[klucz] = wartosc;

        });

        klucz = pom.attr("id");
        wartosc = pom.prop('checked');
        objJSON[klucz] = wartosc;

        klucz = czosn.attr("id");
        wartosc = czosn.prop('checked');
        objJSON[klucz] = wartosc;

        klucz = pizza.attr("id");
        wartosc = pizza.val();
        //        console.log(wartosc);
        objJSON[klucz] = wartosc;





        //        klucz = !agreement.prop(':checked');
        //        wartosc = agreement.val();
        //        objJSON[klucz] = false;


        //        let sos1 =""
        //        = $('#pomidorowy');
        //        let wartoscSos1 = sos1.val();
        //
        //        console.logv(wartoscSos1);
        //        objJSON[sos1] = wartoscSos1;




        console.log(objJSON);

        return false;
    });



});
