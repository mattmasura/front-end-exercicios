// 4. Escreva 4 (quatro) funções que aceitam 2 (dois) parâmetros cada, cada uma delas deve realizar uma 
// das 4 (quatro) operações matemáticas básicas (soma, subtração, divisão e adição), **retorne** o resultado 
// de cada operação em cada uma delas;

const soma = function ( a , b ) {
  resultado = a + b;
  return console.log(resultado)
}

const subt = function ( a , b ) {
  resultado = a - b;
  return console.log(resultado)
}

const mult = function ( a , b ) {
  resultado = a * b;
  return console.log(resultado)
}

const divi = function ( a , b ) {
  resultado = a / b;
  return console.log(resultado)
}

a = Number(prompt('Digite o valor de a: '));
b = Number(prompt('Digite o valor de b: '));
soma(a, b);
subt(a, b);
mult(a, b);
divi(a, b);