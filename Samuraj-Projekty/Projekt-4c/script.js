let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeBackground = (e) =>{

    console.log(e.keyCode);
    const code = e.keyCode;

    // if(e.keyCode === 38){
    //     document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
    // }else if(e.keyCode === 40){
    //     document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
    // }

    switch(code){
        case 38:
        document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
        break;
        case 40:
        document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
        break;
    }
    
}
window.addEventListener("keydown", changeBackground)
