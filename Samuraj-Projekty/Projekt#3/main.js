const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");



console.log(listItems);

let size = 15;

// const addListElements = () =>{
    
//     for(let i = 0; i < listItems.length; i++){
//        listItems[i].classList.remove("li_display");       
//     }

//        ul.style.fontSize = ++size + "px";
// }

const addListElements = () =>{
    
    listItems.forEach(function(item){
       item.classList.remove("li_display");       
    })
    
       ul.style.fontSize = ++size + "px";
}

btn.addEventListener("click", addListElements);