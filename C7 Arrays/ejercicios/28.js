function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(Array.isArray(arr) && arr.length > 0){
    return true
  } else if(typeof arr === 'string'){
    return false
  }
}

module.exports = esArrayNoVacio;

var arr = [1,2,3,4]
var arr1 = 'Sring'
var arr2 = 1
console.log(esArrayNoVacio(arr2))