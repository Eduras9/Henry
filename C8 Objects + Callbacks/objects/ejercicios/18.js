function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

  if(objetoUsuario.hasOwnProperty('amigos')){
    objetoUsuario['amigos'].push(nuevoAmigo)
  }else {
    return 'No hay propiedad amigos'
  }
  // if(Array.isArray(objetoUsuario['amigos'])){
  //   objetoUsuario['amigos'].push(nuevoAmigo)
  // } else {
  //   return 'No hay propiedad amigos'
  // }
  //objetoUsuario['amigos'].push(nuevoAmigo)

  return objetoUsuario
}

module.exports = agregarAmigo;

var carro = {
  nombre: 'BMW', 
  km: 6000, 
  estado: 'Semi Nuevo', 
  propiedad: 'hola', 
  password: 'gfgd', 
  amigos: ['maria']
}
console.log(agregarAmigo(carro, 'fabio'))
