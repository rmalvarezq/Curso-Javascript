'use strict'

//ejercicio 2 

// Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
// hasta introducir un numero negativo y ahí mostrar el resultado
var sum = 0;
var cont = 0;
do {
    var num  = parseInt(prompt("introduce un numero hasta que ingrese un negativo",0));
if (isNaN(num)) {
    num= 0;
    
}else if (num >= 0){
    sum =  sum+num;
    cont++;

}
console.log(sum);
console.log(num);



} while (num >= 0);

alert("la suma de todos los numeros es: "+sum);
alert("la media es: "+(sum/cont));