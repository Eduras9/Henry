function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  if(typeof objetoMisterioso['numeroMisterioso'] === 'number'){
    return objetoMisterioso['numeroMisterioso'] * 5
  } else {
    return 'No es un numero'
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;

var carro = {numeroMisterioso: 5}
console.log(multiplicarNumeroDesconocidoPorCinco(carro))
