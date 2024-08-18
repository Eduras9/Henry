function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero <= 1){
    return false
  }
  // Verificamos la divisibilidad desde 2 hasta la raíz cuadrada del número
  for(var i = 2; i<=Math.sqrt(numero); i++){
    if(numero % i === 0){//verifamos que no hayan divisores
      return false
    }
  }
  return true
}

module.exports = esNumeroPrimo;

console.log(esNumeroPrimo(2))

var num = (4 % 2)
console.log(num)