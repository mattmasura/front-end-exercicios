// Em um concurso para professor em uma instituição de ensino, os seguintes critérios são considerados com as respectivas pontuações:
// Experiência: até 5 anos = 10 pontos; 5 anos ou mais = 20 pontos;
// Formação: superior = 10 pontos; pós-graduação = 20 pontos; mestrado = 30 pontos; doutorado = 40 pontos; 
// Faça um script em JavaScript que solicite a experiência e a formação do candidato, e calcule e exiba qual 
// seria a sua pontuação para o concurso.

let experiencia = prompt('Tempo de experiência: ');
let formacao = prompt('Formação (superior, pós-graduação, mestrado ou doutorado):');
let pontuacaoXP = Number(0);
let pontuacaoFor = Number(0);

experiencia = Number(experiencia);

if (experiencia < 5) {
  pontuacaoXP += 10;
} 
else {
  pontuacaoXP += 20;
}

if (formacao == 'superior') {
  pontuacaoFor += 10;
} 
else if (formacao == 'pós-graduação') {
  pontuacaoFor += 20;
} 
else if (formacao == 'mestrado ') {
  pontuacaoFor += 30;
} 
else {
  pontuacaoFor += 40;
}

let pontuacaoFinal = pontuacaoXP + pontuacaoFor

console.log(`Sua pontuação é de: ${pontuacaoFinal}`);