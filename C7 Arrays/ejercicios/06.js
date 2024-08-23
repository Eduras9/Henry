function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  //MANERA RECURSIVA

  let invertirArray = []

  for(let i = array.length - 1; i>=0 ; i--){
    invertirArray.push(array[i])
  }

  return invertirArray
  //MANERA CON .REVERSE
  //var invertirArray = array.reverse()

  //return invertirArray
}

module.exports = invertirArray;

var array = [1,2,3,4,5]
console.log(invertirArray(array))
