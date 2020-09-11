'use strict'

//calculadora 


var num1=parseInt(prompt('Ingresa el primer numero: ',0)); 
var num2=parseInt(prompt('Ingresa el segundo numero: ',0)); 

while (num1 < 0 || num2 < 0 || isNaN(num1)||isNaN(num2)) {
     num1=parseInt(prompt('Ingresa el primer numero: ',0)); 
     num2=parseInt(prompt('Ingresa el segundo numero: ',0)); 
  }

var resul =  "La suma es :"+(num1+num2)+"<br/>"+
    "La resta es :"+(num1-num2)+"<br/>"+
    "La multiplicación es :"+(num1*num2)+"<br/>"+
    "La división es :"+(num1/num2)+"<br/>";


    var resulcmd =  "La suma es :"+(num1+num2)+"\n"+
    "La resta es :"+(num1-num2)+"\n"+
    "La multiplicación es :"+(num1*num2)+"\n"+
    "La división es :"+(num1/num2)+"\n";

document.write(resul);
alert(resulcmd);
console.log(resulcmd);


