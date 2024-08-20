function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort()
  return array.sort((a,b) => a - b)
}

module.exports = ordenarArray;

var arreglo = [1,5,1,1,7,4,2,9,1]
 console.log(ordenarArray(arreglo))