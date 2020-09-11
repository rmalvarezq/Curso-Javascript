'use strict'

//mostar todos los numeros impares que hay
//entre dos numeros
var num1=parseInt(prompt('Introduce primer número ',0)); 

var num2=parseInt(prompt('Introduce segundo número',0)); 

while (num1 < num2) {
    num1++;
    if (num1%2 != 0) {
        console.log('El numero '+num1+' es impar');
     }

    
}