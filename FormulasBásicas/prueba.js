function solution(lado1, lado2, lado3) {
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log(false);
  } else {
    const semiperimetro = (lado1 + lado2 + lado3) / 2;
    const altura =
      (2 / lado1) *
      Math.sqrt(
        semiperimetro *
          (semiperimetro - lado1) *
          (semiperimetro - lado2) *
          (semiperimetro - lado3)
      );
    console.log(parseInt(altura));
  }
}
solution(16, 8, 10);
solution(6, 6, 6);
