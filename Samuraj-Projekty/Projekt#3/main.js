const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");



console.log(listItems);

let size = 15;

const addListElements = () =>{
    
    for(let i = 0; i < listItems.length; i++){
       listItems[i].classList.remove("li_display");
       listItems[i].style.fontSize = size +"px" ;
       
    }

   
}

btn.addEventListener("click", addListElements);