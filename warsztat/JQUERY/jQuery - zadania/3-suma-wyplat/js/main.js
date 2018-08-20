$(function(){
    
    let employees = $('#employees');
    let salaries = $(".salary");
    let countSum = $("#sum");
    let buttonAddUp = $("#count-sum");
    
    
    let addUpFunction = () =>{
    var sum = 0;
    $('.salary').each(function() {
        
        sum += parseInt($(this).text());
        countSum.text(sum);
    });
    }
    
    buttonAddUp.click(addUpFunction);
       
       
   
    
   
    
})
