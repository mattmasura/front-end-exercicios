// 9. Escreva um programa que solicite ao utilizador a quantidade de números desejada (_n_) e, utilizando um 
// laço de repetição, imprima os _n_ primeiros números da sequência de Fibonacci, onde cada número é a soma dos 
// dois anteriores (começando por 0 e 1). Exemplo de sequência: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34...`

let qtdeDesej = Number(prompt('Digite a qtde de números desejadas: '));
let a = 0;
let b = 1;
let contador = Number(3);

if (qtdeDesej == 1) {
    console.log(a)
  }
  if (qtdeDesej == 1) {
    console.log(b)
  } else {
    console.log(`${a, b}`)
  }

for(contador; contador<=qtdeDesej; contador++) {
  console.log(`${a+b}`)
  let prox = a + b;
  a = b;
  b = prox;
}