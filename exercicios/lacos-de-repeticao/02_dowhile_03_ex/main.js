// 3. Escreva um programa que solicite 5 números ao usuário e exiba ao final apenas o maior deles;

let contador = Number(0);
let maior = Number(0);

do {
  let numero = Number(prompt(`Digite o ${contador + 1}º número:`));
  if (numero > maior) {
    maior = numero;
  }
  contador += 1;
} while (contador < 5);
console.log(`O maior número digitado foi: ${maior}`);