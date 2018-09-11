function ajax (method, url){

    var httpReq = new XMLHttpRequest();

    httpReq.open(method, url);

    httpReq.onreadystatechange = function(){


        if(httpReq.readyState == 4){

            if(httpReq.status == 200){

                var retData = httpReq.responseText;
                retData = JSON.parse(retData);

                console.log(retData);

                let template = "";
                let content = document.getElementById('content');

                if(retData){
                    retData.forEach(element => {
                        template += `
                        <div class="country">
                            <h2>${element.name.official}</h2>
                            <p>Stolica: <strong>${element.capital}</strong></p>
                            <p>Waluta: ${element.currency}
                        </div>
                    `
                   content.innerHTML = template;
                        
                    });
                    
            
                }




            }
        }
    }



    httpReq.send();





};

ajax("GET", "http://leguralnie.pl/json/countries.json");