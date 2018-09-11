
function positiveSum(arr) {
  
let sum = 0
     arr.forEach(function(element){
         if(element>0){
             
           sum = sum + element ;
         }else{
             return 0;
         }
    
    });
            return sum;
        
 
}

console.log(positiveSum([-2,0]));