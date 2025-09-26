// Em um programa de bolsa de estudos universitária, os seguintes critérios são considerados com as respectivas pontuações:
// Renda familiar:
// até R$ 2.000 = 30 pontos;
// de R$ 2.001 a R$ 4.000 = 20 pontos;
// acima de R$ 4.000 = 10 pontos;
// Desempenho acadêmico:
// média até 6.9 = 5 pontos;
// média de 7.0 a 8.4 = 15 pontos;
// média de 8.5 a 10.0 = 25 pontos;
// Faça um script em JavaScript que solicite a renda familiar e a média acadêmica do estudante, calcule e exiba qual 
// seria a sua pontuação total para concorrer à bolsa de estudos.

let renda = parseFloat(prompt('Informe a sua renda familiar: '));
let mediaAcademica = parseFloat(prompt('Informe a sua média acadêmica: '));

let pontuacaoRenda = Number(0);
let pontuacaoAcad = Number(0);

if (renda < 2000) {
  pontuacaoRenda += 30;
}
else if (renda < 4000) {
  pontuacaoRenda += 20;
}
else {
  pontuacaoRenda += 10;
}

if (mediaAcademica < 7) {
  pontuacaoAcad += 5;
}
else if (mediaAcademica < 8.5) {
  pontuacaoAcad += 15;
}
else {
  pontuacaoAcad += 25;
}

let pontuacaoFinal = pontuacaoAcad + pontuacaoRenda

console.log(`Sua pontuação é de: ${pontuacaoFinal}`);