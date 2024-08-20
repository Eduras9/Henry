function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var Mayus = array.map(num => {
    if (typeof num === 'string'){
       return num.toUpperCase()
    } else {
      return num 
    }
  })

  return Mayus
}

module.exports = convertirStringAMayusculas;

