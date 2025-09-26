// Faça um script em JavaScript que solicite um número ao usuário e verifique se ele está entre 532 e 743.

let num = prompt('Insira um número: ');
num = Number(num);

if (num >= 532 && num <= 743) {
  console.log(`O ${num} está entre 532 e 743`);
} 
else {
    console.log(`O ${num} não está entre 532 e 743`);
}