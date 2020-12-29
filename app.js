const texto = document.querySelectorAll('.intro');

texto.forEach( letra => {
    letra.addEventListener("mouseover", ()=> {
        if(letra.classList.contains("bounce")){
            letra.classList.remove("bounce");
        }else {
            letra.classList.add("bounce");
        }
    })
});

const bg = document.querySelector(".bg-fa");
const nav = document.querySelector("nav");
bg.addEventListener("click" , () => {
    nav.classList.toggle("changepos");
});
    


const texts = ['DESARROLLADOR WEB.','PROGRAMADOR.','ESTUDIANTE.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, index++);
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 1;
    }
    setTimeout(type, 250);
}());

const progressbar = document.querySelector(".bar");
const percentage = document.querySelector(".percentage");
var barwidth = 1;
var increase = setInterval(() => {
    if(barwidth >= 100){
        return 0;
    }
    barwidth = barwidth + 1;
    progressbar.style.width = `${barwidth}%`;
    if(barwidth % 5 == 0){
        percentage.innerHTML = barwidth+" % ";
    }
}, 14);


const icono = document.querySelectorAll(".icono");
icono.forEach(icono => {
    icono.addEventListener("click" , ()=> {
        cambiarvalores(icono.innerText);
    });
})

const contacto = document.querySelector("#contacto");
contacto.addEventListener("click", ()=> {
    contact.classList.add("make_smaller");
    home.style.display = "none";
    contact.style.display = "flex";
    console.log("Contacto");
});

const main = document.querySelector("main");
//Switch para pillar vlue de los iconos e ir cambiando el main
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");

function cambiarvalores(partesMenu){
    switch(partesMenu){
        case "Inicio":
            home.classList.add("make_smaller");
            contact.style.display = "none";
            home.style.display = "flex";
            console.log("Inicio");
            break;
        case "Sobre mi":
            console.log("Sobre mi");
            break;
        case "Habilidades":
            console.log("Habilidades");
            break;
        case "Experiencia":
            console.log("Experiencia");
            break;
        case "Contacto":
            contact.classList.add("make_smaller");
            home.style.display = "none";
            contact.style.display = "flex";
            console.log("Contacto");
            break;
    }
}
