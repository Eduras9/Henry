function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null

  return objeto
}

module.exports = agregarPropiedad;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}

console.log(agregarPropiedad(carro, 'como'))
