'use strict'

const btn = document.querySelector("button");

const showNumber = () => {
    const wrapper = document.querySelector(".inner_wrapper");
    const div = document.createElement('div');
    wrapper.appendChild(div);

    

}

btn.addEventListener("click", showNumber);