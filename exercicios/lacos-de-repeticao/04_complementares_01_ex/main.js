// 1. Escreva um programa que calcula a soma dos números de 0 até _n_, sendo _n_ um número 
// positivo maior que 1 inserido pelo usuário;

let num_user = Number(prompt('Digite um número: '));
let contador = Number(0);
let soma = Number(0);

while (contador <= num_user) {
  soma += contador;
  contador += 1;
}

console.log(`Soma de 0 até ${num_user}: ${soma}`);