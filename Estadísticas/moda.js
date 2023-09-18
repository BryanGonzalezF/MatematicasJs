function calcularModa(lista) {
  const listaCount = {};
  for (let i = 0; i < lista.length; i++) {
    const elementoLista = lista[i];

    if (listaCount[elementoLista]) {
      listaCount[elementoLista] += 1;
    } else {
      listaCount[elementoLista] = 1;
    }
  }

  const listaArr = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArr, 1);
  const MaxNumberLista = listaOrdenada[listaArr.length - 1];
  /* console.log({ listaCount, listaArr, listaOrdenada, MaxNumberLista }); */
  console.log('La moda de su lista es', MaxNumberLista[0]);
}
function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListasSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordenarListasSort);
  return lista;
}
/* function sumaArr(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma = suma + lista[i];
  }
  console.log(suma);
}

sumaArr([1, 2, 3]);
 */
