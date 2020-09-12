'use strict';

/*
ingresar 6 numeros por pantalla y los meta en un array
mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y 
en la consola
ordelanrlo y mostrarlo
invertir el odren y mostrarlo
mostrar cuantos elementos tiene el array
busqueda de un valor introducido por el usuaro 
*/
var array_num = [];

function mostrarArray(elementos, textoCustom) {
	document.write('<h1>Contenido del array ' + textoCustom + '</h1>');
	document.write('<ul>');
	array_num.forEach((element, index) => {
		document.write('<strong>' + element + '</strong><br/>');
	});
	document.write('</ul>');
}

for (var i = 0; i < 5; i++) {
	// array_num[i] = parseInt(prompt('Ingrese numero :'), 0);
	array_num.push(parseInt(prompt('Ingrese numero :', 0)));
}
mostrarArray(array_num);
console.log(array_num);
// ordenados
array_num.sort(function (a, b) {return a - b});
console.log(array_num);
mostrarArray(array_num, 'ordenados');
//invertir y mostrar

array_num.reverse()
mostrarArray(array_num,'revertido');

///busqueda

var busqueda = parseInt(prompt('ingrese un numero  a buscar: ',0));
var posicion = array_num.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write('<h1>Encontrado</h1>');
    document.write('<h1>posición de busqueda: '+posicion+'</h1>');
}else{
    alert('no encontrado');
}





