// 3. Escreva um programa que lê 5 números fornecidos pelo usuário e identifique o maior e o menor deles;

let maior = Number(-999999999);
let menor = Number(999999999);
let contador = Number(1);

do {
  num = Number(prompt('Digite um número: '));
  if (num > maior) {
    maior = num;
  }
  if (num < menor) {
    menor = num
  }
  contador++
} while (
  contador <= 5
)

console.log(`Maior número: ${maior}`)
console.log(`Menor número: ${menor}`)