'use strict'

var nombre = "MArcelo Alvarez";
var nombres = ["ddd", "assss","aaaaa"];

var lenguajes  =  new Array("php", "JS", "GO","java");

// var elemento = parseInt(prompt("que elemento quieres??",0));

// if (elemento >= nombres.length) {
//     alert('Ingrese número menor que: '+nombres.length);
    
// } else {
//     alert("el usuario ingresado es: "+nombres[elemento]);
// }

document.write("<h1>Lenguajes de programación 2018</h1>");
// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>"+lenguajes[i]+"</li>");
// }
document.write("<ul>");
lenguajes.forEach((elemento,index,data) => {
    document.write("<li>"+elemento+"</li>");
    
});
document.write("</ul>");


