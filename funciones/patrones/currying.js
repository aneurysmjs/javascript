/*
   Es cuando una función no toma todos sus argumentos por delante.

   Bueno en su lugar quiere que vos le pasés el primer argumento y después la función va a retornar otra función
   que se supone que vos la llamés con un segundo argumento que a su vez devolverá una nueva función
   que se supone que vos la llames con un tercer argumento y así sucesivamente hasta que todos los argumentos
   hayan sido proporcionados y después la función al final de la cadena va a ser la que va a retornar el valor
   que vos realmente querés.

 */

function add(x) {
   return function (y) {
      return function (z) {
         return x + y + z;
      }
   }
}

var resultado = add(2)(3)(5); // 10

console.log('resultado');
console.log(resultado);



