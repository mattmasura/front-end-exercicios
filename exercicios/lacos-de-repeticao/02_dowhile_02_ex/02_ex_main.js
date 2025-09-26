// 2. Defina uma variável com uma "senha". Faça um laço de repetição que solicite a senha até 
// que o usuário insira a senha correta (utilize prompt para capturar a entrada do usuário);

let senha = 'a1b2c3';

do {
  senha_user = prompt('Digite a senha: ');
} while (
  senha != senha_user
)