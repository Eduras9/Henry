function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
 let resultado = ''

 var string1 = str1.length
 var string2 = str2.length
 var string3 = str3.length

 let MaxLength = Math.max(string1, string2, string3)

 for(let i = 0; i < MaxLength; i ++){
  if(str1[i]) resultado += str1[i]
  if(str2[i]) resultado += str2[i]
  if(str3[i]) resultado += str3[i]
 }

 return resultado

// str1 = str1 || "";
// str2 = str2 || "";
// str3 = str3 || "";

// // Verifica y muestra los valores iniciales de las cadenas
// console.log("str1:", str1);
// console.log("str2:", str2);
// console.log("str3:", str3);

// // Encuentra la longitud máxima
// const maxLength = Math.max(str1.length, str2.length, str3.length);
// console.log("maxLength:", maxLength);

// let resultado = "";

// // Recorre hasta la longitud máxima
// for (let i = 0; i < maxLength; i++) {
//   if (str1[i]) resultado += str1[i];
//   if (str2[i]) resultado += str2[i];
//   if (str3[i]) resultado += str3[i];
// }

// return resultado;
}
 

module.exports = combine;

var combinar = ('abc', '1234', 'dg5')

console.log(combine('abc', '1234', 'dg5'))