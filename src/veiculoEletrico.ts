import Veiculo from './veiculo';

class VeiculoEletrico extends Veiculo {
  bateria: number;

  constructor(latitude: number, longitude: number, bateria: number) {
    super(latitude, longitude);
    this.bateria = bateria;
  }

  carregarBateria(nivel: number): void {
    this.bateria += nivel;
  }
}

export default VeiculoEletrico;