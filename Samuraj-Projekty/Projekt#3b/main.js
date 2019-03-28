let size = 10;
let orderElement = 1;

const init = () => {
 const btn = document.createElement("button");
 btn.textContent = "Dodaj 10 elementów do listy"
 document.body.appendChild(btn);
 const btnReset = document.createElement("button");
 btnReset.textContent = "Wyczyść";
 document.body.appendChild(btnReset);
 const ul = document.createElement("ul");
 document.body.appendChild(ul);
 btn.addEventListener("click", createLiElements);
 btnReset.addEventListener("click", clearList);
}

const createLiElements = () => {
    for(let i = 0; i< 10; i++){
    const li = document.createElement("li");
    document.querySelector('ul').appendChild(li);
    li.textContent = `element-${orderElement++}`;
    li.style.fontSize = `${size++}px`;
}

}

const clearList = ()=>{
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()