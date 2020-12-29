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
        cancelInterval(increase);
    }
    barwidth = barwidth + 1;
    progressbar.style.width = `${barwidth}%`;
    if(barwidth % 5 == 0){
        percentage.innerHTML = barwidth+" % ";
    }
}, 15);

//Switch para pillar vlue de los iconos e ir cambiando el main
