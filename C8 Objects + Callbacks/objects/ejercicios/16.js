function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  //TODAS ESTAS MANERAS ESTAN CORRECTAS
  //return password in objetoUsuario

  //return objetoUsuario.hasOwnProperty(password)

  // if(password in objetoUsuario){
  //   return true
  // } else {
  //   return false
  // }

  if(objetoUsuario.hasOwnProperty(password)){
    return true
  } else {
    return false
  }
}

module.exports = verificarPassword;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo', propiedad: 'hola', password: 'gfgd'}
console.log(verificarPassword(carro, 'password'))
