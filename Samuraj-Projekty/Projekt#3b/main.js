let size = 10;
let orderElement = 0;

const init = () => {
 const btn = document.createElement("button");
 btn.textContent = "Dodaj 10 elementów do listy"
 document.body.appendChild(btn);


 

 btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    const li = document.createElement("li");
    ++orderElement
    size +=size
    for(let i = 0; i<size; i++){
    
    li.textContent = `element-${orderElement}`;
    
}
ul.appendChild(li)*size;
}

init()