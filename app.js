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

function loadSkills(){
    const progressBara = document.querySelectorAll(".progress-bar");
    progressBara.forEach(bara => {
        var widthskill = 1;
        var maximo = parseInt(bara.innerText);
        var increase = setInterval(()=> {
            if(widthskill >= maximo-1){
                clearInterval(increase);
                
            }
            widthskill = widthskill + 1;
            bara.style.width = widthskill+"%";
            
        }, 12);
    });

}
function removeSkills(){
    const progressBara = document.querySelectorAll(".progress-bar");
    progressBara.forEach(bara => {
        bara.style.width = "0%";
    });
}


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
    lightme.style.color = "white";
    lightcode.style.color = "white";
    lightwork.style.color = "white";
    lightcontact.style.color = "rgb(58, 239, 252)";
    lighthome.style.color = "white";
});

const main = document.querySelector("main");
//Switch para pillar vlue de los iconos e ir cambiando el main
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const abilities = document.querySelector(".abilities");
const about_me = document.querySelector(".about-me");
const work = document.querySelector(".work");

const lighthome = document.querySelector("#light-home");
const lightme = document.querySelector("#light-me");
const lightcode = document.querySelector(".light-code");
const lightwork = document.querySelector("#light-work");
const lightcontact = document.querySelector("#light-contact");
lighthome.style.color = "rgb(58, 239, 252)";

function cambiarvalores(partesMenu){
    switch(partesMenu){
        case "Inicio":
            removeSkills();
            home.classList.add("make_smaller");
            contact.style.display = "none";
            abilities.style.display = "none";
            about_me.style.display = "none";
            work.style.display = "none";
            home.style.display = "flex";
            console.log("Inicio");
            lightme.style.color = "white";
            lightcode.style.color = "white";
            lightwork.style.color = "white";
            lightcontact.style.color = "white";
            lighthome.style.color = "rgb(58, 239, 252)";
            break;
        case "Sobre mi":
            removeSkills();
            about_me.classList.add("make_smaller");
            contact.style.display = "none";
            home.style.display = "none";
            abilities.style.display = "none";
            work.style.display = "none";
            about_me.style.display = "flex";
            console.log("Sobre mi");
            lightme.style.color = "rgb(58, 239, 252)";
            lightcode.style.color = "white";
            lightwork.style.color = "white";
            lightcontact.style.color = "white";
            lighthome.style.color = "white";
            break;
        case "Habilidades":
            loadSkills();
            abilities.classList.add("make_smaller");
            home.style.display = "none";
            contact.style.display = "none";
            about_me.style.display = "none";
            work.style.display = "none";
            abilities.style.display = "flex";
            lighthome.style.color = "white";
            console.log("Habilidades");
            lightme.style.color = "white";
            lightcode.style.color = "rgb(58, 239, 252)";
            lightwork.style.color = "white";
            lightcontact.style.color = "white";
            lighthome.style.color = "white";
            break;
        case "Experiencia":
            removeSkills();
            work.classList.add("make_smaller");
            work.style.display = "flex";
            home.style.display = "none";
            contact.style.display = "none";
            about_me.style.display = "none";
            abilities.style.display = "none";
            lightme.style.color = "white";
            lightcode.style.color = "white";
            lightwork.style.color = "rgb(58, 239, 252)";
            lightcontact.style.color = "white";
            lighthome.style.color = "white";
            console.log("Experiencia");
            break;
        case "Contacto":
            removeSkills();
            contact.classList.add("make_smaller");
            home.style.display = "none";
            abilities.style.display = "none";
            about_me.style.display = "none";
            work.style.display = "none";
            contact.style.display = "flex";
            lightme.style.color = "white";
            lightcode.style.color = "white";
            lightwork.style.color = "white";
            lightcontact.style.color = "rgb(58, 239, 252)";
            lighthome.style.color = "white";
            console.log("Contacto");
            break;
    }
}

