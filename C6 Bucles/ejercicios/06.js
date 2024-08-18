function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (Math.abs(num) > 100 && Math.abs(num) < 1000 ) {
    return true
  } else {
    return false
  }
}

module.exports = tieneTresDigitos;

console.log(tieneTresDigitos(-12))
