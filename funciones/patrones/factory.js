function factory() {
   var obj = {
      lugar: 'carmenfur',
      lista: {
         hogar: ['asientos', 'mesas', 'vajillas', 'bombillos'],
         aseo: ['jabon', 'crema dental', 'toallas']
      },
      mostrar: function () {
         return this.lista.hogar.concat(this.lista.aseo);
      }
   };

   return obj;

}


var cosas = factory();

console.log('cosas');
console.log(cosas.mostrar());