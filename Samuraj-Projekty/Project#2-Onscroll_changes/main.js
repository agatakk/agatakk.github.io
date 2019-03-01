document.body.style.height = "10000vh";
document.body.style.margin = "0";

const div = document.createElement("div");
document.body.appendChild(div);
console.log()

div.style.width = "100%";
div.style.position = "fixed";
div.style.top = "0";
div.style.left ="0";

let size = 0;
let grow = false;

const changeHeight = () =>{
    
            if(size>=window.innerHeight/2){
                grow = !grow;
                
            }else if(size< window.innerHeight&& size<=0){
                grow = !grow;
            }
            
            if(grow){
                size += 5;
                div.style.height = size + "px";
                div.style.backgroundColor = "green";
            }else{
                size -= 5
                div.style.height = size + "px";
                div.style.backgroundColor = "red";
    }
    }
window.addEventListener("scroll", changeHeight);