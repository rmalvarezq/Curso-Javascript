'use strict'

// programa que pida dos n´meros y que nos diga cuál es el mayor, menor y si son iguales
// PLUS número menores o iguales a cero 

var num1 = parseInt(prompt("ingrese numero 1: "));
var num2 = parseInt(prompt("ingrese numero 2: "));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
     num1 = parseInt(prompt("ingrese numero 1: "));
     num2 = parseInt(prompt("ingrese numero 2: "));
        
}

if (num1 > num2) {
    console.log('el número: '+num1+" es mayor que: "+num2);
    alert('el número: '+num1+" es mayor que: "+num2);
} else if(num2>num1) {
    console.log('el número: '+num1+" es menor que: "+num2);
    alert('el número: '+num1+" es menor que: "+num2);
} else if (num1==num2) {
    console.log('numeros iguales');
    alert('numeros iguales');
    
}else{
    alert('ingrese numeros válidos');
}
