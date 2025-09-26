// 8. Escreva um algoritmo que leia 10 números e identifique quantos deles são pares (sabendo que o número 
// par é aquele divisível por 2). Utilize o operador `%` módulo para verificar o resto da divisão.

qtdePar = Number(0);
contador = Number(1);

do {
  num = Number(prompt(`Digite o ${contador}° número: `));
  if (num % 2 == 0) {
    qtdePar += 1
  }
  contador++
} while (
  contador <= 10
)

console.log(`Quantidade de números pares: ${qtdePar}`);