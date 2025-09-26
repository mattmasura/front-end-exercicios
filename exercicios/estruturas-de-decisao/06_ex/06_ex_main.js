// Faça um script em JavaScript que solicite uma nota ao usuário e verifique se ela está entre 7.0 e 10.0.

let nota = parseFloat(prompt('Digite a nota: '));

if (nota >= 7 && nota <= 10) {
  console.log(`A nota ${nota} está entre 7 e 10`);
}
else {
  console.log(`A nota ${nota} não está entre 7 e 10`);
}