// Faça um script em JavaScript que solicite uma senha ao usuário e verifique se ela é igual a uma string armazenada em uma
// variável no seu código

let senhaSistema = '12345';

let senhaUser = prompt('Digite a senha: ');

if (senhaUser == senhaSistema) {
  console.log(`Senha correta: ${senhaSistema}`);
} 
else {
  console.log(`Senha incorreta.`);
}