const Inputprice = document.querySelector('#precio');
const Inputcupon = document.querySelector('#cupon');
const btnCalcular = document.querySelector('.btnCalcular');
const pResult = document.querySelector('.result');

btnCalcular.addEventListener('click', calcularConCupon);

/* const cupones = {
  platzi1: 10,
  platzi2: 20,
  platzi3: 30,
  platzi4: 40,
}; */

const cuponArray = [];
cuponArray.push({
  name: 'platzi1',
  discounts: 10,
});
cuponArray.push({
  name: 'platzi2',
  discounts: 20,
});
cuponArray.push({
  name: 'platzi3',
  discounts: 30,
});
cuponArray.push({
  name: 'platzi4',
  discounts: 40,
});
cuponArray.push({
  name: 'platzi5',
  discounts: 50,
});

function calcularConCupon(event) {
  event.preventDefault();
  const price = Number(Inputprice.value);
  const cupon = Inputcupon.value;

  let discount;

  function buscarEnLista(cupones) {
    return cupones.name == cupon;
  }

  const cuponDescuento = cuponArray.find(buscarEnLista);

  if (cuponDescuento) {
    discount = cuponDescuento.discounts;
  } else {
    pResult.innerText = 'El cupon que ingreso no es valido';
    return;
  }

  console.log({
    cupon,
    discount,
    cuponDescuento,
    cuponArray,
  });

  const result = (price * (100 - discount)) / 100;
  pResult.innerText = 'Su precio con descuento es de: ' + '$' + result;
}

/* function calcularConCupon(event) {
  event.preventDefault();
  const price = Number(Inputprice.value);
  const cupon = Inputcupon.value;

  if (!price || !cupon) {
    pResult.innerText = 'Por favor ingresar el precio y el cupón';
    return;
  }

  let discount;

  if (cupones[cupon]) {
    discount = cupones[cupon];
  } else {
    pResult.innerText = 'El cupon que ingreso no es valido';
    return;
  }

  const result = (price * (100 - discount)) / 100;
  pResult.innerText = 'Su precio con descuento es de: ' + '$' + result;
} */

/* function calcularConCupon(event) {
  event.preventDefault();
  let result;
  if (!price.value || !cupon.value) {
    pResult.innerText = 'Ingrese el precio del producto y el cupon';
  } else if (cupon.value == 'PlatziSummer') {
    result = (price.value * (100 - 20)) / 100;
    pResult.innerText =
      'El precio con descuento es: ' + '$' + result.toFixed(2);
  } else if (cupon.value == 'Discount001') {
    result = (price.value * (100 - 10)) / 100;
    pResult.innerText =
      'El precio con descuento es: ' + '$' + result.toFixed(2);
  } else if (cupon.value == 'Discount002') {
    result = (price.value * (100 - 15)) / 100;
    pResult.innerText =
      'El precio con descuento es: ' + '$' + result.toFixed(2);
  } else if (cupon.value == 'Discount003') {
    result = (price.value * (100 - 25)) / 100;
    pResult.innerText =
      'El precio con descuento es: ' + '$' + result.toFixed(2);
  } else {
    pResult.innerText = 'Su cupon no es valido.';
  }
} */
