/* function calcularPromedio(lista) {
  let sumaElementos = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaElementos = sumaElementos + lista[i];
  }
  const promedio = sumaElementos / lista.length;
  console.log(promedio);
  return promedio;
}
*/

function calcularPromedio(lista) {
  function sumarTodos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaElementos = lista.reduce(sumarTodos);

  const promedio = sumaElementos / lista.length;
  console.log(promedio);
  return promedio;
}
