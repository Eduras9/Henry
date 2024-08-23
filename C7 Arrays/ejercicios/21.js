function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  Nuevoarray = []
  
  // for(var i = 0; i<array.length; i++){
  //   if(array[i] === 'Enero'){
  //     Nuevoarray.unshift('Enero')
  //   } else if(array[i] === 'Marzo'){
  //     Nuevoarray.unshift('Marzo')
  //   } else if(array[i] === 'Noviembre'){
  //     Nuevoarray.unshift('Noviembre')
  //   } else {
  //     return ('No se encontraron los meses pedidos')
  //   }
  // }

  // return Nuevoarray

  for(var i = 0; i<array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      Nuevoarray.push(array[i])
    }
  }

  if(Nuevoarray.length === 3){
    return Nuevoarray
  } else {
    return ('No se encontraron los meses pedidos')
  }

}

module.exports = mesesDelAño;

var array = ['Noviembre', 'Abril', 'Enero']
console.log(mesesDelAño(array))
