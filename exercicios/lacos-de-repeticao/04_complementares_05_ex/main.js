// 5. Escreva um programa que leia 20 números e, ao final, escreva quantos estão entre 0 e 100, quantos estão 
// entre 101 e 200 e quantos são maiores de 200;

let num0a100 = Number(0);
let num101a200 = Number(0);
let numMaior200 = Number(0);
let contador = Number(1);

do {
  num = Number(prompt(`Digite o ${contador}° número: `));
  if (num <= 100) {
    num0a100 += 1
  } else if (num <=200) {
    num101a200 += 1
  } else {
    numMaior200 += 1
  }
  contador++
} while (
  contador <= 5
)

console.log(`Qtde de números menores que 101: ${num0a100}`);
console.log(`Qtde de números entre 101 e 200: ${num101a200}`);
console.log(`Qtde de números maiores que 201: ${numMaior200}`);