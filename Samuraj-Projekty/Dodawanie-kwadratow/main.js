'use strict'

const btn = document.querySelector("button");

const showNumber = () => {
    const wrapper = document.querySelector(".inner_wrapper");
    const div = document.createElement('div');
    wrapper.appendChild(div);

    div.textContent = "1";

}

btn.addEventListener("click", showNumber);