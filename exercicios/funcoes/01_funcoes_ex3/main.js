// 3. Escreva uma função que aceita 2 (dois) parâmetros e **retorna** o menor valor dentre eles;
    // - Melhoria opcional: verificar se os parâmetros passados são realmente numéricos ou não e só 
    // realizar a comparação caso sejam;

const menor = function(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

x = Number(prompt('Digite um número: '));
y = Number(prompt('Digite um número: '));
console.log(menor(x, y));