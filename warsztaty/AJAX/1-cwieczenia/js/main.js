'use strict';



// definicja funkcji ajax
function ajax(method, url) {


    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();


    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open(method, url);



    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function () {

        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {

            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpReq.status == 200) {

                let pobierzDane = () => {

                    //                    var returnData = httpReq.responseText;
                    var returnData = $('httpReq.responseText');
                    let jsonData = JSON.parse(returnData);

                    let newPar = document.createElement('p');

                    let txt = document.createTextNode(jsonData.userId + " " + jsonData.userName + " " + jsonData.userURL);

                    newPar.appendChild(txt);

                    let pobraneDane = document.getElementById('pobrane-dane');
                    pobraneDane.appendChild(newPar);

                    //                    console.log(newPar);


                    // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                    httpReq = null;
                }

                document.getElementById("button").addEventListener('click', pobierzDane);
            }

        }

    }


    // wysłanie danych do serwera
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    
ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
