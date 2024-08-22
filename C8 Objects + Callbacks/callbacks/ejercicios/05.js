function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  for(let i=0; i<array.length; i++){
    return cb(array[i])
  }
}

function verArray(elemento){
  return 'Elemento: '+ elemento
}

var array = [1,2,3,4,5]
console.log(forEach(array, verArray))

module.exports = forEach;
