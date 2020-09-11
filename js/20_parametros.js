'use strict'
var num1=parseInt(prompt('')); 
var num2=parseInt(prompt('')); 


//PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas) {
    console.log('Fruta 1:', fruta1); 
    
    console.log('Fruta 2:', fruta2); 
    console.log(resto_de_frutas);
    
    
}

listadoFrutas("naranja", "Manzana","asdasd","asdasd","asdasd","asdasd");

var frutas = ["Naranja","Manzana"]
listadoFrutas("naranja", "Manzana","asdasd","asdasd","asdasd","asdasd");