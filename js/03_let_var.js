'use strict'
// diferencia del let y del var es que let solo es usa a nivel local, var se puede usar a nivel global 
var numero =40;
// prueba con var
 console.log(numero);
  if (true) {
      
    var numero =50;
    console.log(numero);
  }
  console.log(numero);//queda el número dentro del if


  var texto ="curso de js";
  console.log(texto);

//   prueba de let
if (true) {
    let texto = "curso de laravel";
    console.log(texto);
}
console.log(texto); //queda el valor del inicio