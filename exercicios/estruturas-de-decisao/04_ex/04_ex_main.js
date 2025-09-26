// Para uma pessoa realizar um consórcio em um banco, é necessário que ela tenha 18 anos ou mais e possua renda mensal 
// de 2 (dois) salários mínimos. Faça um script em JavaScript que solicite a idade e a renda mensal do usuário e exiba 
// a mensagem se ele está apto ou não realizar um consórcio

let idade = prompt('Digite a sua idade: ');
let salario = prompt('Digite o seu salário: ');

idade = Number(idade);
let salarioMin = Number(1518*2);

if (salario > salarioMin && idade >= 18) {
  console.log(`Consórcio liberado.`);
} 
else {
  console.log(`Consórcio negado.`);
}