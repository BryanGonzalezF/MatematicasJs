const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const btnCalcular = document.querySelector('.btnCalcular');
const result = document.querySelector('.result');
btnCalcular.addEventListener('click', calcular);

function calcular(event) {
  event.preventDefault();

  const price = Number(inputPrecio.value);
  const discount = Number(inputDescuento.value);

  if (!price || !discount) {
    result.innerText = 'Por favor ingrese el precio y su descuento';
  } else if (discount > 100) {
    result.innerText = 'El descuento no valido';
  } else {
    const priceDiscount =
      (inputPrecio.value * (100 - inputDescuento.value)) / 100;
    console.log(priceDiscount);

    result.innerText = 'El precio con descuento es ' + '$' + priceDiscount;
  }
}
