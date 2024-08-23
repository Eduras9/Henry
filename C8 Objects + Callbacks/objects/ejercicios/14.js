function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objetoUsuario.hasOwnProperty('email')){
    return true
  } else {
    return false
  }
}

module.exports = tieneEmail;

var carro = {nombre: 'BMW', email: 6000, estado: 'Semi Nuevo'}

console.log(tieneEmail(carro))
