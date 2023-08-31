import VeiculoEletricoVoador from "./veiculoEletricoVoador";

// Exemplo de uso
const meuVeiculo = new VeiculoEletricoVoador(40.7128, -74.006, 80, 100);
console.log("Veículo criado:", meuVeiculo);

meuVeiculo.mover(41.8781, -87.6298);
meuVeiculo.carregarBateria(20);
meuVeiculo.voar(200);

console.log("Veículo modificado:", meuVeiculo);
