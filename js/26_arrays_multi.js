'use strict';

var cate = ['accion', 'terror'];
var peliculas = ['la vida es vella', 'gran torino'];
var cine = [cate, peliculas];
var elemento = prompt('ingresa pelicula: ');
while (elemento != 'a') {
	elemento = prompt('ingresa pelicula: ');
	peliculas.push(elemento);
}
//BUSQUEDAS
for (let pelicula in peliculas) {
	console.log(peliculas[pelicula]);
	console.log('121212');
}



var precios  = [10,20,30];

// var busqueda = peliculas.find((pelicula) => pelicula == 'gran torino');

var busqueda = precios.some(precio => precio > 10);
console.log('resultado de la busqueda: ' + busqueda);
