const div = document.createElement("div");
document.body.appendChild(div);

let size = 100;
div.style.height = size + "px";
div.style.width = size + "px";

let grow = true;

const enlargeDiv = () => {
    if(size>window.innerHeight / 2){
        grow = !grow
    }else if(size<=0){
        grow = !grow
    }
    if(grow){
        size += 6;
        div.style.height = size + "px";
        div.style.width = size + "px";
    }else{
        size -= 6;
        div.style.height = size + "px";
        div.style.width = size + "px";
    }
}

window.addEventListener("scroll", enlargeDiv);