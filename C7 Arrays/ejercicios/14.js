function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  return array.filter(num => typeof num === 'number' && num > 10) || 'No hay elementos mayores a 10'
}

module.exports = contarElementosMayoresA10;

let array = [1,3,4,5,70,83,12,45]
console.log(contarElementosMayoresA10(array))
