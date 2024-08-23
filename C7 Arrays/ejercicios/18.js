function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  const sumaTotal = resultadosTest.reduce((suma, cantidad) => suma + cantidad, 0)

  var promedio = sumaTotal / resultadosTest.length

  return promedio
}

module.exports = promedioResultadosTest;

var notas = [1.5,2,3,4]
console.log(promedioResultadosTest(notas))
