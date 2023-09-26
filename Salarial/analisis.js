console.log(salarios);

const personaEnBusqueda = 'Juanita';
/* analisis personal */
/* const persona = salarios.find((persona) => {
  return persona.name == personaEnBusqueda;
}); */

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);

  return medianaSalarios;
}

/* Analisis por persona */

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesDeCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeDeCrecimiento = crecimiento / salarioPasado;
    porcentajesDeCrecimiento.push(porcentajeDeCrecimiento);
  }

  const medianaPorcentaDeCrecimiento = PlatziMath.calcularMediana(
    porcentajesDeCrecimiento
  );

  /*   console.log({ porcentajesDeCrecimiento, medianaPorcentaDeCrecimiento });
   */
  const ultimoSalario = trabajos[trabajos.length - 1].salario;

  const aumento = ultimoSalario * medianaPorcentaDeCrecimiento;

  const nuevoSalario = ultimoSalario + aumento;

  console.log(medianaPorcentaDeCrecimiento);
  return nuevoSalario;
}

/* reestructuración de información de salarios */

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
console.log(empresas);

/* calcular mediana por empresa */
function medianaEmpresaYear(nombreEmpresa, year) {
  if (!empresas[nombreEmpresa]) {
    console.warn('La empresa no existe');
    return;
  } else if (!empresas[nombreEmpresa][year]) {
    console.warn('La empresa no pago salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombreEmpresa][year]);
  }
}

function proyeccionPorEmpresa(nombreEmpresa) {
  if (!empresas[nombreEmpresa]) {
    console.warn('La empresa no existe');
  } else {
    const empresasYears = Object.keys(empresas[nombreEmpresa]);
    const listaMedianaYears = empresasYears.map((year) => {
      return medianaEmpresaYear(nombreEmpresa, year);
    });
    let porcentajesDeCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeDeCrecimiento = crecimiento / salarioPasado;
      porcentajesDeCrecimiento.push(porcentajeDeCrecimiento);
    }

    const medianaPorcentaDeCrecimiento = PlatziMath.calcularMediana(
      porcentajesDeCrecimiento
    );
    const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];

    const aumento = ultimoMediana * medianaPorcentaDeCrecimiento;

    const nuevaMediana = ultimoMediana + aumento;

    console.log(medianaPorcentaDeCrecimiento);
    return nuevaMediana;
  }
}
