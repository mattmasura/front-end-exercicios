// 3. Escreva um programa em que o usuário insira 10 números, exiba a contagem 
// de quantos números inseridos são maiores do que 50;

let contador = Number(0);
let max_contador = Number(prompt('Digite a quantidade de números que serão inseridos: '));
let qtde50 = Number(0);

for ( contador; contador <= (max_contador-1); contador++ ) {
  num = Number(prompt(`Digite o ${contador}° número: `));
  if (num > 50) {
    qtde50 += 1;
  }
}

console.log(`Quantidade de números maiores que 50: ${qtde50}`);