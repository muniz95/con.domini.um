class Vehicle {
  public id: number;
  public brand: string;
  public model: string;
  public plate: string;
  public color: string;
  public vehicleType?: string;
  
  constructor() {
    this.id = 0;
    this.brand = "";
    this.model = "";
    this.plate = "";
    this.color = "";
    this.vehicleType = "";
  }
}

export default Vehicle;
