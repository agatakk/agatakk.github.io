
'use strict';




function ajax( method, url) {
    
    

    var httpReq = new XMLHttpRequest();
    
    
 
    httpReq.open( method, url);
    
    
 
    httpReq.onreadystatechange = function() {
        
        
        if ( httpReq.readyState == 4 ) {
            
           
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                let data = JSON.parse(returnData);
        
                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", "dane-programisty");
                console.log(newDiv);
              
                let newText = document.createTextNode( data.imie + '\n' + data.nazwisko + '\n ' + data.zawod + '\n ' + data.firma +".")
                
                let pobraneDane = document.getElementById("container");

                function daneProgramisty() {
                    
                    newDiv.appendChild(newText);
                    pobraneDane.appendChild(newDiv);
                    
                };

                
                

                let btn = document.getElementById("btn");

                console.log(btn);

                btn.addEventListener("click", daneProgramisty);
            
                
                httpReq = null;
                
            }
            
        }
    
    }


 
    httpReq.send();
}






  
ajax( "GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php" );
