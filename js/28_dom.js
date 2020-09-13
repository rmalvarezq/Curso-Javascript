'use strict';

function cambiaColor(color) {
    caja.style.background = color;
}
//conseguir elementos con un ID concreto
// var caja = document.getElementById('micaja');
//tambien se lo puede seleccionar por query pero acá con #
var caja = document.querySelector("#micaja");
caja.innerHTML = "!texto el la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
// caja.className = "hola hola2";
console.log(caja);
//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs); 


//conseguir elementos por su clase css
