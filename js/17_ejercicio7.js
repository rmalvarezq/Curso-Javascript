'use strict'

//tabla de multiplicar de un numero
//introducido por pantalla

var num1=parseInt(prompt('ingresa numero')); 
document.write("<h1>Tabla del "+num1+"</h1>");
for (var i = 0; i < num1; i++) {
    document.write(i+" X "+num1+" = "+(i*num1)+"<br/>");
    
}

//todas las tablas de multiplicar
for (var i = 0; i <= 10; i++) {
    document.write("<h1>Tabla del "+i+"</h1>");
    for (var j = 0; j <= 10; j++) {
        document.write(j+"X"+i+" = "+(j*i)+"<br/>");
    }
}