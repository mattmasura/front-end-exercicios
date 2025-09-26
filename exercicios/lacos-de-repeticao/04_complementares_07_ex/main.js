// 7. Defina uma variável com uma "senha". Faça um laço de repetição que solicite a senha até que o usuário 
// insira a senha correta. Exiba quantas tentativas incorretas o usuário realizou;

let senha = '12345';
let contador = Number(0);

do {
  senha_user = prompt('Digite a senha: ');
  contador++
} while (
  senha_user != senha
)

console.log(`Senha correta!`);
console.log(`Quantidade de tentativas: ${contador}`);