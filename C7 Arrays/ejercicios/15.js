function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  //return array.filter(num => typeof num === 'number' && )
  let max = array[0]

  array.filter(num => {
    if(num > max){
      max = num
    }
  })
}


module.exports = encontrarIndiceMayor;
