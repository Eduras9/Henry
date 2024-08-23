function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var sumaTtotal = arrayOfNumbers.reduce((suma, valorActual)=> suma + valorActual,0)
   return cb(sumaTtotal)
}

function verSuma(cb){
   return ('la suma total es ' + cb) 
} 

const arreglo = [1,2,3,4]

console.log(sumarArray(arreglo, verSuma))

module.exports = sumarArray;
