function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   if(typeof callback === 'function'){
      return callback(string)
   } else {
      return string
   }
}

function aMayus(string) {
   return string.toUpperCase()
}

var completo = cambiarCadena('Hola como vas', aMayus)
console.log(completo)

module.exports = cambiarCadena;
