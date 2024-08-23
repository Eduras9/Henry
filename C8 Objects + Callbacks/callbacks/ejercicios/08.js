const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  for(let i=0; i<array.length; i++){
    if(callback(array[i])){
      return array[i]
    }
  }
  return 'No se encontro el elemento'
};

function Encontrar(elementoDelArray){
  return elementoDelArray === 'hola'

}

var array = ['como estas', 'carro']
console.log(buscarElemento(array, Encontrar))
module.exports = buscarElemento;
