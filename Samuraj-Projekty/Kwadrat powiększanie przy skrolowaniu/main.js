const div = document.createElement("div");
document.body.appendChild(div);

let size = 100;
div.style.height = size + "px";
div.style.width = size + "px";

let grow = false;

const enlargeDiv = () => {
    // if(size<=0){
    // grow = !grow
    // }else if(size>window.innerHeight / 2){
    //     grow = !grow
    // }
    if(size<=window.innerHeight/2){
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