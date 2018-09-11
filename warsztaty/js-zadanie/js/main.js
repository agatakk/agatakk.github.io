
const colors = [
    '#f65f5f',
    '#0c6388',
    '#ade0f6',
    '#05640a',
    '#e39c20',
    '#e320c1',
];
let currentColor;

function random(){
        let index = Math.random();
        index*=10;
        index = Math.floor(index);

        
        if(index >= colors.length){
            random();
            return
        }

        if(colors[index] == currentColor) {
            random();
            return;
        }

        currentColor = colors[index];

        document.body.style.backgroundColor = colors[index];

        console.log(index);

}

const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', random);