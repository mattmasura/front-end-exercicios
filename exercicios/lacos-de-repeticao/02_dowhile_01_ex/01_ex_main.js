// 1. Faça um programa que solicite 1 ou 0. Caso o usuário insira um número
// diferente, o programa deverá solicitar novamente uma entrada do usuário;

let solicitarNum;

do {
  solicitarNum = Number(prompt('Digite um número (0 ou 1): '));
} while (
  solicitarNum != 0 && solicitarNum != 1
);