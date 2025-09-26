// 2. Escreva uma função que aceita 1 (um) parâmetro e exibe no console o tipo da variável recebida como argumento;

const varMsg = function(x) {
  console.log(`${typeof(x)}`);
}

x = prompt('Digite um número/valor: ');
varMsg(x);