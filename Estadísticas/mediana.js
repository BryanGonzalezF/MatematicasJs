function esPar(lista) {
  return !(lista.length % 2);
}

function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
  } else {
    const indexListaImpar = Math.floor(lista.length / 2);
    console.log(indexListaImpar);
    console.log(lista[indexListaImpar]);
  }
}
