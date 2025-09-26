const maior = (x, y, z) => {
  if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
    let maior = x;

    if (y > maior) {
      maior = y;
    }
    if (z > maior) {
      maior = z;
    }

    return maior;
  } else {
    console.log('Valor inválido!');
    return null; 
  }
};

const x = Number(prompt('Digite o primeiro valor: '));
const y = Number(prompt('Digite o segundo valor: '));
const z = Number(prompt('Digite o terceiro valor: '));

console.log(`Maior número: ${maior(x, y, z)}`);