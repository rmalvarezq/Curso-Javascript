'use strict';

var nombre = 'MArcelo Alvarez';
var nombres = ['ddd', 'assss', 'aaaaa'];

var lenguajes = new Array('php', 'JS', 'GO', 'java');

// var elemento = parseInt(prompt("que elemento quieres??",0));

// if (elemento >= nombres.length) {
//     alert('Ingrese número menor que: '+nombres.length);

// } else {
//     alert("el usuario ingresado es: "+nombres[elemento]);
// }

// document.write("<h1>Lenguajes de programación 2018</h1>");
// // for (var i = 0; i < lenguajes.length; i++) {
// //     document.write("<li>"+lenguajes[i]+"</li>");
// // }
// document.write("<ul>");
// lenguajes.forEach((elemento,indice,arr) => {
//     console.log(arr);
//     document.write("<li>"+indice+" "+elemento+"</li>");
// });

for (const lenguaje in lenguajes) {
	document.write('<li>' + lenguajes[lenguaje] + '</li>');
}
//
var busquedas = lenguajes.find(function (lenguajes) {
	return lenguaje == 'php';
});

document.write('</ul>');
