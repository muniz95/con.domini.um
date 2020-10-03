class Vehicle {
  public id: number;
  public brand: string;
  public model: string;
  public plate: string;
  public color: string;
  public category?: string;
  
  constructor(params: any) {
    this.id = params.id;
    this.brand = params.brand;
    this.model = params.model;
    this.plate = params.plate;
    this.color = params.color;
    this.category = params.category;
  }
}

export default Vehicle;
