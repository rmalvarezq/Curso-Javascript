'use strict'

//numero par o impar
//si no es valido que pida dneuevo el numero


var number=parseInt(prompt('Ingresa el numero',0)); 


while (isNaN(number)) {
    number = parseInt(prompt('Ingresa el numero',0));
}

if (number%2 == 0) {
    alert('numero par');
}else {
    alert('numero IMPAR')
}