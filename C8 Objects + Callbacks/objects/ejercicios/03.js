const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor

  return objeto
};

module.exports = agregarNuevaPropiedad;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}

console.log(agregarNuevaPropiedad(carro, 'llantas', 'nuevas'))

