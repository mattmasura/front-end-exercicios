// 5. Escreva uma função que aceita 2 (dois) parâmetros, um valor (inteiro) e um desconto (porcentagem), retorne 
// o valor com o desconto aplicado;

const valorFinal = function (preco, desconto) {
  let valorFinal = preco * (1 - (desconto / 100));
  return valorFinal;
}

preco = Number(prompt('Digite o preço: '));
desconto = parseFloat(prompt('Digite o valor da % de desconto'));
console.log(valorFinal(preco, desconto));