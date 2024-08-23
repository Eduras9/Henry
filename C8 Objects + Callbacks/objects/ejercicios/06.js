const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let sumador = 0

  for(let prop in objeto){
    sumador ++
  }

  return sumador
};

module.exports = contarPropiedades;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}

console.log(contarPropiedades(carro))
