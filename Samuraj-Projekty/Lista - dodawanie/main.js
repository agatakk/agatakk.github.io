'use srtict';

const btn = document.querySelector("button");
console.log(btn);
const ul = document.querySelector("ul");

let itemNumber = 1

const addListItem = () =>{
    const li = document.createElement("li");
    li.textContent = itemNumber;
    ul.appendChild(li);
    if(itemNumber%3 == 0){
        li.classList.add("bigger_li");
    }
    itemNumber += 2;
}


btn.addEventListener("click", addListItem);