function add (x) {
   return function (y) {
      return function (z) {
         return x + y + z;
      }
   }
}

var resultado = add(2)(3)(5); // 10

console.log('resultado');
console.log(resultado);


