'use strict'

// hacer un programa que muestre tdos los numero entre dos numero introducidos
// por el usuario
// 
var num1 =  parseInt(prompt("ingrese primer numero: ",0));
var num2 =  parseInt(prompt("ingrese segundo numero: ",0));

document.write("<h1>De "+num1+" a "+num2+"</h1>");

for (var i = num1; i <= num2; i++) {
    document.write(i+"</br>");
    
}