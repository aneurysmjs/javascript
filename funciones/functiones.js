// declaration

function foo() {

}

// expression

var suma = function (a, b) {
   return a + b;
};

/*--- invocation methods ---*/

/*--- method ---*/

var o = {
   a: 1,
   f: function () {
      return this.a + 1;
   }
};


/*--- function invocation ---*/

var resultado = suma(2, 2);


/*--- constructor ---*/

// Crear una función constructor llamada Quo.
// crea un objeto con la propiedad status.
var Quo = function (string) {
   this.status = string;
};

// Dar a todas las instancias de Quo un método público llamado get_status
Quo.prototype.get_status = function () {
   return this.status;
};
// Hacer una instancia de Quo.
var myQuo = new Quo("confusio");

console.log(myQuo.status); // confusio

/*--- apply ---*/

// hacer un arreglo de dos números y súmelos
var arreglo = [3, 4];
var miResultado = suma.apply(null, arreglo);

console.log(miResultado); // 7

// hacer un objeto con la propiedad status.
var statusObject = {
   status: 'OK'
};

var status = Quo.prototype.get_status.apply(statusObject);

console.log(status);// 'OK'



//anonymous function expression
var a = function() {
   return 3;
};

//named function expression
var b = function bar() {
   return 3;
};

//self invoking function expression
(function sayHello() {
   console.log("hello!");
})();

