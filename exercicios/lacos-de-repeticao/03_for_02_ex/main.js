// 2. Escreva um programa em que o usuário insira o peso de 10 pessoas e calcule a média aritmética do peso delas;

let contador = Number(0);
let max_contador = Number(prompt('Digite a qtde de pessoas: '));
let soma = Number(0);

for ( contador; contador <= (max_contador-1); contador++ ) {
  peso = Number(prompt(`Digite o ${contador+1}° peso: `));
  soma += peso
}

console.log(`Soma dos pesos ${soma}`);
console.log(`O peso médio é de ${soma/max_contador}kg`);