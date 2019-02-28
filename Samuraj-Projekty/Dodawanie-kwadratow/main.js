'use strict'

const btn = document.querySelector("button");

let number = 1

const showNumber = () => {
    const wrapper = document.querySelector(".inner_wrapper");
    const div = document.createElement('div');
    wrapper.appendChild(div);
    
    div.textContent = number;
    number += 1; //licznik
   

}

btn.addEventListener("click", showNumber);