function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objeto.hasOwnProperty(propiedad)){
    return true
  } else {
    return false
  }
}

module.exports = tienePropiedad;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo', propiedad: 'hola'}
console.log(tienePropiedad(carro, 'propiedad'))