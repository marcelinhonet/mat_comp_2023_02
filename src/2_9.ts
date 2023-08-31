class ProgressaoGeometrica {
  primeiroTermo: number;
  constante: number;

  constructor(primeiroTermo: number, constante: number) {
    this.primeiroTermo = primeiroTermo;
    this.constante = constante;
  }

  gerarTermos(quantidade: number): number[] {
    const termos: number[] = [this.primeiroTermo];

    for (let i = 1; i < quantidade; i++) {
      const termoAnterior = termos[i - 1];
      const novoTermo = termoAnterior * this.constante;
      termos.push(novoTermo);
    }

    return termos;
  }
}

// Exemplo de uso
const primeiraConstante = 2;
const primeiraProgressao = new ProgressaoGeometrica(1, primeiraConstante);
const termosPrimeira = primeiraProgressao.gerarTermos(50);

console.log(`Primeira progressão com constante ${primeiraConstante}:`);
console.log(termosPrimeira);
