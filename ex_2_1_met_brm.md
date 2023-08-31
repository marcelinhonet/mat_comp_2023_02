Exercicio 2.1:
Enumeração Familia_Torrieli:
Pai = 'Carlos',
Mae = 'Analia',
Irmao1 = 'Marcos',
Irmao2 = 'Fernando',
Irmao3 = 'Cesar',
Irma1 = 'Roberta',
Irma2 = 'Debora',
Esposa1 = 'Elizabeth',
Filha1 = 'Isabela',
Filha2 = 'Manuela'
Fim-enumeração.

Exercicio 2.2:
Enumeração Cursos_Fatec_Jacarei:
Curso1 = 'Desenvolvimento de Software Multiplataforma',
Curso2 = 'Geoprocessamento',
Curso3 = 'Meio ambiente e recursos hidricos'
Fim-enumeração.

Exercicio 2.3:
Enumeração Numeros_Primos:
Numeros_Primos = 2,3,5,7,11,13,17,19...
Fim-enumeração.

Exercicio 2.4:
Enumeração Colega_de_Classe:
Beatriz = ![image](https://github.com/marcelinhonet/mat_comp_2023_02/assets/62179343/d87bd09c-ad86-4f21-8f25-74569d5f512c)

Fim-enumeração.

Exercicio 2.5:
Primeiro elemento: a₁ = 2 
Segundo elemento: a₂ = 3 * a₁ = 3 * 2 = 6.
Terceiro elemento: a₃ = 3 * a₂ = 3 * 6 = 18.
Quarto elemento: a₄ = 3 * a₃ = 3 * 18 = 54.

Exercicio 2.6:

codigo ts

2.7
Código main.ts

2.8
Na função recursiva cria-se uma série de chamadas em pilha, que pode sobrecarrega a memória, causando o limite máximo de chamadas na pilha excedido, ou Maximusm Call Stack Exceeded.
Ja na função iterativa, essa chamada é feita em loop, evitando a sobrecarga pois não há empilhamento de chamadas.
Concluindo, no primeiro exemplo ele vai executar numeros menores em sequencia até chegar ao caso base, no segundo exemplo isso não acontece.

2.9
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

2.10





