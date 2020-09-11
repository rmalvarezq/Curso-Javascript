'use strict'
//funciones
//una función es una agrupación reutilizable de un conjunto de instrucciones 
var num1=parseInt(prompt('Ingresa el primer numero: ',0)); 
var num2=parseInt(prompt('Ingresa el segundo numero: ',0)); 
var resul =  "";
function porConsola(num1,num2) {
        console.log(' La suma es :'+(num1+num2)+'<br/>');
        console.log('"La resta es :"'+(num1-num2)+'"<br/>"');
        console.log('"La multiplicación es :"'+(num1*num2)+'"<br/>"');
        console.log('"La división es :"'+(num1/num2)+'"<br/>"');
        console.log('******************************** ');
}
function porPantalla(num1,num2) {
    document.write(' La suma es :'+(num1+num2)+'<br/>');
    document.write('"La resta es :"'+(num1-num2)+'"<br/>"');
    document.write('"La multiplicación es :"'+(num1*num2)+'"<br/>"');
    document.write('"La división es :"'+(num1/num2)+'"<br/>"');
    document.write('******************************** ');
}

function calculadora(num1,num2, mostrar = false) {
    if (mostrar !== false) {
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
        
    }
}
///invocar o llamar a la función
calculadora(num1,num2);

// for (var i = 0; i < 10;  i++) {
//     console.log(i);
    
//     calculadora(i,8);

// }