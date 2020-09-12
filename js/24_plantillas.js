'use strict'

var nombre = prompt('Mete tu nombre');
var apellidos= prompt('Mete tu apellido');
//forma 1 
var texto_1= 'mi nombre es: '+nombre+' Mi apellido es: '+apellidos;

//forma 2
var texto = `
<h1> Hola que tal</h1>
<h3>Mi nombre es: ${nombre} </h3>
<h3>Mis apellidos son: ${apellidos}</h3>
 `;
document.write(texto);