// 2. Escreva um programa que realiza a soma de dois números inseridos pelo usuário até que ele digite a palavra "encerrar";

let contador = Number(1);
let soma = Number(0);

do {
  num = prompt(`Digite o ${contador}° número ou 'encerrar' para finalizar o programa: `)
  if (num == 'encerrar') {
    console.log('Programa finalizado pelo usuário')
    soma = 0
    break
  } else {
  soma += Number(num)
  contador++
  }
} while (
  contador <= 2 || num == 'encerrar'
)

console.log(`Soma: ${soma}`);