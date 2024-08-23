function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var array = []

  for(let i=0; i<=10; i++){
    let resultado = 6 * i
    
    array.push(resultado)

  }

  return array
}

module.exports = tablaDelSeis;

console.log(tablaDelSeis())