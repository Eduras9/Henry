function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(let i= 0; i<= array.length; i++){
    if(array[i].length >= 5){
      return array[i]
    }
  }
  return 'No hay'

  //return array.find(item => typeof item === 'string' && item.length > 5) || 'no hay' 

}

module.exports = obtenerPrimerStringLargo;

var array = ['hola', 'hello1']
console.log(obtenerPrimerStringLargo(array))

