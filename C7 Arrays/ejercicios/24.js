function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var array = []

  for(let i=1; i<=10; i++){
    num += 2

    if(i === 5 ){
      continue
    }

    array.push(num)
  }

  return array
}

module.exports = continueStatement;

console.log(continueStatement(4))

//1=6 2=8 3=10 4=12 5=12 6=14 7=16 8=18 9=20 10=22
