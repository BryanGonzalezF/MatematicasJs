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
