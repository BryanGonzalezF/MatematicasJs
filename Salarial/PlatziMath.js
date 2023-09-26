/* promedio */
const PlatziMath = {};

/* mediana */
PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
};

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarTodos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaElementos = lista.reduce(sumarTodos);

  const promedio = sumaElementos / lista.length;
  /*   console.log(promedio);
   */ return promedio;
};

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1 = lista[lista.length / 2 - 1];
    const indexMitad2 = lista[lista.length / 2];
    const mitadLista = [indexMitad1, indexMitad2];
    const medianaListaPar = PlatziMath.calcularPromedio(mitadLista);
    return medianaListaPar;
  } else {
    const indexListaImpar = Math.floor(lista.length / 2);
    /* console.log(indexListaImpar); */
    return lista[indexListaImpar];
  }
};

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListasSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }
  const lista = listaDesordenada.sort(ordenarListasSort);

  return lista;
};

/* moda */
PlatziMath.calcularModa = function calcularModa(lista) {
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
  console.log('La moda de su lista es', MaxNumberLista[0]);
};
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  function ordenarListasSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordenarListasSort);
  return lista;
};
