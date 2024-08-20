function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((acumuludaor, sumador) => acumuludaor + sumador, 0)
}

module.exports = agregarNumeros;

var array = [1,2,3,4]
console.log(agregarNumeros(array))
