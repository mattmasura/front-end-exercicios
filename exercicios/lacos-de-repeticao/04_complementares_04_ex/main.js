// 4. Escreva um programa que receba um número inserido pelo usuário e usando laços de repetição 
// calcule e mostre a tabuada desse número;

let num = Number(prompt('Insira o número da tabuada'));
let contador = Number(1)

while ( contador <= 10) {
  console.log(`${contador} x ${num} = ${contador*num}`)
  contador++
}