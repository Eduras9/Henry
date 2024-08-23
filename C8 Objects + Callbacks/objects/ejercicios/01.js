const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   return a;
};

module.exports = obtenerValorPropiedad;

var carro = {nombre: 'Fabio'}

console.log(obtenerValorPropiedad(carro, 'nombre'))