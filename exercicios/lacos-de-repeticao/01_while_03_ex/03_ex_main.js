// 3. Escreva um programa que exiba os números de 1 a _n_, sendo _n_ um número máximo inserido pelo usuário;

num = Number(prompt('Insira um número'));
contador = Number(1);

while (contador <= num) {
  console.log(contador);
  contador += 1;
}