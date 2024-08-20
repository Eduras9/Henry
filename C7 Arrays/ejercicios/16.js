function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let indice = array.map((item, index) => item * index)

  return indice
}

module.exports = multiplicarElementosPorIndice;
let array = [1,2,3,4,5]
console.log(multiplicarElementosPorIndice(array))
