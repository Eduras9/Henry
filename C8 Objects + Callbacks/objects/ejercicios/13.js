function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad]

  return objeto
}

module.exports = eliminarPropiedad;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}
console.log(eliminarPropiedad(carro, 'nombre'))
