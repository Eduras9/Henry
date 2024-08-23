function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // var par = array.map(num => {
  //   if(num % 2 === 0){
  //     return num
  //   } else {
  //     return false
  //   }
  // })

  // return par

  return array.filter (num => typeof num === 'number' && num % 2 === 0) || 'No hay pares'
}

module.exports = filtrarNumerosPares;

let array = [2,4,5,7,8,20]
console.log(filtrarNumerosPares(array))
