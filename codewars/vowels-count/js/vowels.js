function getCount(str) {
  
let n = str.length;
    var vowelsCount = 0;
  for(let i=0; i<n; i++){
  if(str[i] ==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
  vowelsCount+=1};
  }
  // enter your majic here
  
  return vowelsCount;
}

console.log(getCount('agata'));