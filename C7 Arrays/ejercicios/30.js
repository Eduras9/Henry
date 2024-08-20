function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for(let i=0; i<numeros.length; i++){
    if(numeros[i + 1] === numeros[i]){
      return numeros[i]
    }
  }

  return null
}

module.exports = encontrarElementoRepetido;

var arr = [1,2,3,3,4]
console.log(encontrarElementoRepetido(arr))