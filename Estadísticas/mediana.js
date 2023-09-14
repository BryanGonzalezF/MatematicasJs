function esPar(lista) {
  return !(lista.length % 2);
}

function calcularPromedio(lista) {
  function sumarTodos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaElementos = lista.reduce(sumarTodos);

  const promedio = sumaElementos / lista.length;
  console.log(promedio);
  return promedio;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1 = lista[lista.length / 2 - 1];
    const indexMitad2 = lista[lista.length / 2];
    const mitadLista = [indexMitad1, indexMitad2];
    const medianaListaPar = calcularPromedio(mitadLista);
    return medianaListaPar;
  } else {
    const indexListaImpar = Math.floor(lista.length / 2);
    console.log(indexListaImpar);
    return lista[indexListaImpar];
  }
}

function ordenarLista(listaDesordenada) {
  function ordenarListasSort(valorAcumulado, nuevoValor) {
    /* return -1 => cuando el valor sea negativo significa que nuestro valor no esta bien ordenado y se debe cambiar el orden
        return 0 => cuando el valor sea 0 significa que nuestra lista se quedara igual, no cambiara
        return 1 => cuando el valor sea positivo al igual que en  un  resultado de 0, la lista se quedara como esta, no habrá cambios
        */
    /* para ordenar una lista se puede hacer con condicionales como por ejemplo */
    /* 
    -----
    ---->
    */
    /*  if (valorAcumulado > nuevoValor) {
      return -1;
    } else if ((valorAcumulado = nuevoValor)) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return 1;
    }
      con esto se obtendra una lista ordenada de mayor a menor */
    /* -------
    de esta manera obtendremos una lista ordenada de menor a mayor 
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if ((valorAcumulado = nuevoValor)) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    } 
    ---------
    ---------*/
    /* otra manera en la que le podriamos dar una soluciona al problema de ordenar una lista podria ser el siguiente: */

    return valorAcumulado - nuevoValor;
    /* si quisieramos devolver una lista de mayor a menor podriamos poner primero el nuevoValor y restarle el valorAcumulado */
  }
  const lista = listaDesordenada.sort(ordenarListasSort);

  return lista;
}
