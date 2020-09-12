'use strict'
// var num1=parseInt(prompt('')); 
// var nombre=prompt('Ingrese nombre: '); 


// Funciones anonimas
// es una función que no tiene nombre 

// var pelicula = function (nombre) {
//     return "La pelicula es: " +nombre;
//     document.write(nombre);
//     console.log(nombre);
// }
//las funciones de flecha solo son el reemplazo de la palabra function

function sumame(num1,num2, sumaYmuestra, sumaPorDos) {
    var sumar= num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;

}

sumame(5,7, dato=> {
    console.log('La suma es:, dato');
},
    dato => {
    console.log('La suma por dos es:',(dato*2));
}
)




// console.log(sumame(3,8));
