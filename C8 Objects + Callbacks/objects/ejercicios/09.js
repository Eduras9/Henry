function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var cliente = {
    nombre: nombre,
    email: email,
    password: password,
  }

  return cliente
}

module.exports = nuevoUsuario;

var cliente = nuevoUsuario('Fabio', 'fabioandfe@gm.oc', 'password')
console.log(cliente.nombre)
