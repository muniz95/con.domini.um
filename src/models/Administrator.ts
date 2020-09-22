class Administrator {
  public id?: number;
  public name?: string;
  public phone?: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.phone = params.phone;
  }
}

export default Administrator;
