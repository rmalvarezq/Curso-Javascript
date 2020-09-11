'use strict'
var num=parseInt(prompt('mete un numero: ',1)); 


//programa que muestre todos los numero divisores 
// de un nunmero introduce en prompt


for (var i = 0; i < num; i++) {
    if (num %i ==0) {
        console.log('Divisor: '+i);
    }
}

