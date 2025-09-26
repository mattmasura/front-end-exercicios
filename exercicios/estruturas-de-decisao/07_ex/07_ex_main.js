// Para uma pessoa obter financiamento de veículo em uma concessionária, é necessário que ela tenha 21 anos ou mais
// e possua renda mensal de pelo menos R$ 3.000,00. Faça um script em JavaScript que solicite a idade e a renda mensal
// do usuário e exiba uma mensagem informando se ele está apto ou não para obter o financiamento.

let idade = prompt('Digite a sua idade: ');
let renda = prompt('Digite o seu salário: ');

idade = Number(idade);
let rendaMin = Number(3000)

if (renda > rendaMin && idade >= 21) {
  console.log(`Financiamento liberado.`);
} 
else {
  console.log(`Financiamento negado.`);
}