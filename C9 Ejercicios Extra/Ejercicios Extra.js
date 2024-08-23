/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto)
}

var objeto = {D: 1, B: 2, C: 3}
console.log(deObjetoAarray(objeto))

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let contador = {}

  for(let i=0; i<string.length; i++ ){
    let letra = string[i]

    if(contador[letra]){
      contador[letra]++
    } else {
      contador[letra] = 1
    }
  }

  let objetoOrdenado = {}
  Object.keys(contador).sort().forEach((letra => {
    objetoOrdenado[letra] = contador[letra]
  }))

  return contador

}

var strin = "adsjfdsfsfjsdjfhacabcsbajda"
console.log(numberOfCharacters(strin))

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayus = []
  let minu = []

  for(let i=0; i<string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      mayus.push(string[i])
    }

    if(string[i] === string[i].toLowerCase()){
      minu.push(string[i])
    }
  }

  return mayus.join('') + minu.join('')
}

var mayus = 'soyHENRYs'
console.log(capToFront(mayus))

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let nuevoArray = []

  let frasePartida = frase.split(' ')

  for(let i=0; i<frasePartida.length; i++){
    let palabraInvertida = frasePartida[i].split('').reverse().join('')
    nuevoArray.push(palabraInvertida)
  }

  return nuevoArray.join(' ')
}

var frase = 'The Henry Challenge is close!'
console.log(asAmirror(frase))

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeroaStr = numero.toString()

  //var numero = numeroaStr.split('').reverse().join('')
  
  if(numeroaStr.split('').reverse().join('') === numeroaStr){
    return 'Es capicua'
  } else {
    return 'No es capicua'
  }
}

var numero = 1881
console.log(capicua(numero))


function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let array = ''
  
  for(let i=0; i<string.length; i++){
    let contador = string[i]

    if(contador !== 'a'  && contador !== 'b'  && contador !== 'c'){
      array += contador
    }
  }

  return array
}

var array = 'abgdfdc'
console.log(deleteAbc(array))

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a,b) => a.length - b.length)
}

var array = ["You", "are", "beautiful", "looking"]
console.log(sortArray(array))

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let nuevoArray = []

  for(let i=0; i<array1.length; i++){
    if(array2.includes(array1[i])){
      nuevoArray.push(array1[i])
    }
  }

  return nuevoArray
}

var array1 = [4,2,3]
var array2= [1,3,4]

console.log(buscoInterseccion(array1, array2))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
