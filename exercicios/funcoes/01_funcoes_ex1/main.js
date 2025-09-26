// 1. Escreva uma função que aceita 1 (um) parâmetro e exibe no console a variável recebida como argumento;

// const idade = function (x) {
//   idade = 2025 - x;
//   return idade
// }

// x = Number(prompt('Digite seu ano de nascimento'));
// console.log(`Sua idade é: ${idade(x)}`)

const mensagem = function(nome) {
  return console.log(`Bem vindo(a) ${nome}`);
}

nome = prompt('Digite o seu nome: ')
mensagem(nome);