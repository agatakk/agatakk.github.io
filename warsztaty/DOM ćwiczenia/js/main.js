document.getElementById("female").value = "male";

document.getElementById("agreement").name = "surname";



document.getElementById("mail").class = "email";

let name = document.getElementById("name");

let nameAtt = document.createAttribute("class");
nameAtt.value = "imię";
name.setAttributeNode(nameAtt);

let sctRemoved = document.getElementById('remove');
let parRemoved = document.getElementById('removed');

console.log(sctRemoved, parRemoved);

let addText = document.createTextNode('piszę piszę piszę hahaha');
parRemoved.appendChild(addText);

let form = document.getElementById("form");
console.log(form);

form.removeChild(sctRemoved);

//sctRemoved.removeChild(parRemoved);


let surname = document.getElementById("lastname");
let surnameAtt = document.createAttribute("class");
surnameAtt.value = "nazwisko";
surname.setAttributeNode(surnameAtt);

let mail = document.getElementById("mail");
mail.setAttribute("class", "email");
console.log(mail);

let phone = document.getElementById("phone");

phone.setAttribute("class", "tel");
console.log(phone);

let par = document.getElementById("newPar");
console.log(par);
let newText = document.createTextNode("Tutaj wrzucony został zupełnie nowy tekst");
console.log(newText);
par.appendChild(newText);

let par1 = document.createElement('p');
let newPar1 = document.body.appendChild(par1);
let par1Text = document.createTextNode("Wpisałam sobie tutaj tekst");
par1.appendChild(par1Text);


let newSection = document.createElement('section'); //tworzenie sekcji
let sectionApp = document.body.appendChild(newSection); //przypinanie do body/rodzica etc.
let sectionText = document.createTextNode("stworzyłam nową sekcję lolol, ciekawe czy działa"); //wpisanie węzła tekstu
newSection.appendChild(sectionText); //przypisanie węzła tekstu do sekcji 

document.body.removeChild(newSection);




let male = document.getElementById("male");
male.setAttribute("class", "non-male");
console.log(male);


let newSection1 = document.createElement('section');
let appendSct = form.appendChild(newSection1);
let newPar5 = document.createElement('p');
let par5Append = newSection1.appendChild(newPar5);

let anotherText = document.createTextNode('wpisałam nowy tekst do parafrafu, tak?')

newPar5.appendChild(anotherText);
newPar5.textContent = "wpisałąm tutaj cos nowego hahahahahhahahahahha";
newPar5.textContent = "a teraz znowu coś nowego";


let cokolwiek = document.getElementById("text9").textContent = "nowy tekst";
console.log(cokolwiek);
