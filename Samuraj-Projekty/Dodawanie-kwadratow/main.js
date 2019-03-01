'use strict'

const btn = document.querySelector("button");

let number = 1

if(number = 1){
    console.log("true");
}

const showNumber = () => {
    const wrapper = document.querySelector(".inner_wrapper");
    const div = document.createElement('div');
    wrapper.appendChild(div);
    
    div.textContent = number;
    number += 1; //licznik

    if(div.textContent % 5 == 0){
        // div.style.borderRadius = "50%";
        // div.style.backgroundColor = "rgb(214, 214, 214)";
        // div.style.color = "rgb(194, 89, 120)";
        // div.style.border = "1px solid rgb(194, 89, 120)";
        div.classList.add("clicked-fifth");
    }
   

}

btn.addEventListener("click", showNumber);