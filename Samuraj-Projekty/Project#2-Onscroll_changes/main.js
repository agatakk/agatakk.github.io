document.body.style.height = "10000vh";
document.body.style.margin = "0";

const div = document.createElement("div");
document.body.appendChild(div);
console.log()

div.style.width = "100%";
div.style.height = "10px";
div.style.backgroundColor = "green";
div.style.position = "fixed";
div.style.top = "0";
div.style.left ="0";


window.addEventListener("scroll", changeHeight);