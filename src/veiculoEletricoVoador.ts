import VeiculoEletrico from './veiculoEletrico';

class VeiculoEletricoVoador extends VeiculoEletrico {
  altitude: number;

  constructor(latitude: number, longitude: number, bateria: number, altitude: number) {
    super(latitude, longitude, bateria);
    this.altitude = altitude;
  }

  voar(altitude: number): void {
    this.altitude = altitude;
  }
}

export default VeiculoEletricoVoador;