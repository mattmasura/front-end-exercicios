// Faça um script em JavaScript que solicite um número ao usuário e verifique se ele é maior do que 10.

let num = prompt('Insira um número: ');
num = Number(num);

if (num <= 10) {
  console.log(`${num} é menor ou igual a 10.`);
} 
else {
    console.log(`${num} é maior que 10.`);
}