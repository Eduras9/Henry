const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  var MostrarPropiedades = Object.keys(objeto)

  return MostrarPropiedades
};

module.exports = listarPropiedades;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}

console.log(listarPropiedades(carro))
