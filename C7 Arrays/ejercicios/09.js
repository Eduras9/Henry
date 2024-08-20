function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var verrandom = Math.random()
   var elemento = Math.floor(Math.random() * array.length)

   console.log(verrandom)
   return array[elemento]
   
}

module.exports = obtenerElementoAleatorio;

