class Veiculo {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  mover(latitude: number, longitude: number): void {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export default Veiculo;