function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   return list.sort((obj1,obj2) => {
      return obj2[sortBy] - obj1[sortBy]
   })
}

module.exports = sort;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}
const list = [
   { a: 1, b: 3 },
   { a: 3, b: 2 },
   { a: 2, b: 40 }
 ];
console.log(sort('a', list))



