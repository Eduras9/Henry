function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for(let i = 0; i< objetoMuchosUsuarios.length; i++){
    if(objetoMuchosUsuarios[i].hasOwnProperty('esPremium')){
      objetoMuchosUsuarios[i]['esPremium'] = true
    } else {
      return 'No existe la propiedad'
    }
  }
  return objetoMuchosUsuarios
}

module.exports = pasarUsuarioAPremium;

var usuarios = [
  {nombre: 'Fabio', edad: 21, esPremium: false},
  {nombre: 'Camila', edad: 19, esPremium: false}
]

console.log(pasarUsuarioAPremium(usuarios))

console.log(usuarios[0]['esPremium'])
