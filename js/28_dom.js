'use strict';

function cambiaColor(color) {
	caja.style.background = color;
}
//conseguir elementos con un ID concreto
// var caja = document.getElementById('micaja');
//tambien se lo puede seleccionar por query pero acá con #
var caja = document.querySelector('#micaja');
caja.innerHTML = '!texto el la caja desde JS';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
// caja.className = "hola hola2";
console.log(caja);
//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
//var contenidoText = todosLosDivs[2].innerHTML;  --> otra forma abajo
// var contenidoText = todosLosDivs[2].textContent;
var contenidoText = todosLosDivs[2];

var seccion = document.querySelector('#misession');
var hr = document.getElementById('hr');

var valor;

for (valor in todosLosDivs) {
	if (typeof todosLosDivs[valor].textContent == 'string') {
		var parrafo = document.createElement('p');
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}
seccion.append(hr);
//conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
for (var div in divsRojos) {
	if (divsRojos[div].className == 'rojo') {
		divsRojos[div].style.background = 'red';
	}
}
