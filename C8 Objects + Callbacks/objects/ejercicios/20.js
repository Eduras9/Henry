function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let sumador = 0
  
  for(let i = 0; i<objetoUsuario['post'].length; i++){
    sumador += objetoUsuario.post[i]['likes']
  }

  return sumador
}

module.exports = sumarLikesDeUsuario;

var usuario = {
  nombre: 'Fabio',
  post: [
    {titulo: 'post1', likes: 10},
    {titulo: 'post2', likes: 20},
    {titulo: 'post3', likes: 30}
  ]
}

console.log(sumarLikesDeUsuario(usuario))
