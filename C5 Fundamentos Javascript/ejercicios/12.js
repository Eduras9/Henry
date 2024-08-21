function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  // cualquier opcion esta bien
  //if(str1.length === str2.length){
    //return true
  //} else {
    //return false
  //}

  return str1.length === str2.length
}


module.exports = tienenMismaLongitud;

var array = ['hola', 'puedo']
console.log(tienenMismaLongitud('hola', 'pued'))
