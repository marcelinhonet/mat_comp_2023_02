//a)
console.log("Exercicio a)");
enum MesesDoAno {
  Janeiro = 1,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

// Exemplo de uso
const mes: MesesDoAno = MesesDoAno.Julho;
console.log("Mês:", mes); //Saída:Mês:7

//b)
console.log("Exercicio b)");
enum DiasDaSemana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}

// Exemplo de uso
const dia: DiasDaSemana = DiasDaSemana.Sexta;
console.log("Dia:", dia); //Saída:Dia:5

//c)
console.log("Exercicio c)");
function calcularFatorial(numero: number): number {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

// Exemplo de uso
const numeroParaFatorial = 5;
const fatorial = calcularFatorial(numeroParaFatorial);
console.log(`O fatorial de ${numeroParaFatorial} é ${fatorial}`);
// Saída: O fatorial de 5 é 120

//d)
console.log("Exercicio d)");
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  estudar(): void {
    console.log(`${this.nome} está estudando na faculdade.`);
  }
}

class GeneroDiferenca extends Pessoa {
  genero: string;

  constructor(nome: string, idade: number, genero: string) {
    super(nome, idade);
    this.genero = genero;
  }

  apresentar(): void {
    console.log(
      `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou do gênero ${this.genero}.`
    );
  }
}

const pessoa1 = new GeneroDiferenca("Marcelo", 43, "Masculino");
pessoa1.apresentar(); // Saída: Olá, eu sou Marcelo, tenho 43 anos e sou do gênero Masculino.
pessoa1.estudar(); // Saída: Marcelo está estudando na faculdade.
