function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   // Correcto: usando Bracket Notation para acceder a una propiedad dinámica
   objeto[propiedad] = valor;
   
   // Incorrecto: esto crearía una propiedad literal llamada 'propiedad'
   // objeto.propiedad = valor;
   //Dot notation se utiliza cuando se sabe el nombre de la propiedad y queremos actualizarla
   return objeto;
}

module.exports = actualizarValorPropiedad;

var carro = {nombre: 'BMW', km: 6000, estado: 'Semi Nuevo'}

console.log(actualizarValorPropiedad(carro, 'nombre', 'Ferrari'))


