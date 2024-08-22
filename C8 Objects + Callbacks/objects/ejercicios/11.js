function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  objeto[metodo]()

  return objeto
}

module.exports = invocarMetodo;

var carro = {
  nombre: 'BMW', 
  km: 6000, 
  estado: 'Semi Nuevo',
  saludar: function(){
    console.log('Hola me llamo ' + this.nombre)
  }
}

invocarMetodo(carro, 'saludar')
