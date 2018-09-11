$(function () {
    
    let myDiv = $("#my-div");
    let btn = $("#onclick");
    let endingText = $('#ended');
  
    
    function colorAnimation () {
        let state = true;
        if(state){
            myDiv.animate({
                'backgroundColor': "blue",
            },5000,);
        }else{
            myDiv.animate({
                'backgroundColor': "hotpink",
            },5000);
        };
            state = !state;        
            
    };
    
    
    btn.click(function () {
        myDiv.animate({
            "marginLeft": '+=100px',
            'height': "100px",
            'width': "100px",

        },3000, colorAnimation);

    endingText.fadeIn("slow");
    })
  
     
        
  
    
    

});
