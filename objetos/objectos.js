// objeto como constructor

var obj = new Object();

// objeto literal
var obj2 = {};

var cliente = {
   "nombre": "jero",
   "apellido": "script"
};


/*------------------*/

var vuelo = {
   aerolinea: "Avianca",
   numero: 815,
   salida: {
      hora: "2016-09-22 14:55",
      ciudad: "Cali"
   },
   llegada: {
      hora: "2016-09-23 10:42",
      ciudad: "Los Angeles"
   }
};

/*--- Retrieval ---*/

console.log(cliente["nombre"]); //jero
console.log(vuelo.salida.ciudad); // "Cali"

// undefined

console.log(cliente["ciudad"]); //undefined
console.log(vuelo.estado); // undefined
console.log(cliente["NOMBRE"]); //undefined

// ||

var ciudad = cliente["ciudad"] || "(ninguna)";
var estado = vuelo.estado || "desconocido";

// &&
console.log(vuelo.equipo); //undefined
console.log(vuelo.equipo.modelo); //"TypeError"
console.log(vuelo.equipo && vuelo.equipo.modelo); //undefined

// update

cliente['nombre'] = 'mateo';

cliente['lenguaje'] = 'ruby';

cliente.email = 'mateo@blackserver.me';

vuelo.equipo = { modelo: 'Boeing 777' };

vuelo.estado = retrasado;

// reference

var o = {x:1}, p = {x:1}; // Dos objetos con las mismas propiedades
o === p // => falso: objetos distintos nunca son iguales

var a = [], b = []; // Dos arreglos vacíos
a === b // => falso: arreglos distintos nunca son iguales




