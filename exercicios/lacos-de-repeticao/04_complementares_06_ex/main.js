// 6. Escreva um algoritmo que leia uma sequência de números do usuário e realize a soma 
// desses números. Encerre a execução quando um número negativo for digitado.

let soma = Number(0);
let contador = Number(0)

do {
  num = Number(prompt('Digite um valor: '))
  if (num < 0) {
    console.log(`Soma: ${soma}`)
    break
  } else {
  soma += num
  contador++
  }
} while (num > 0)