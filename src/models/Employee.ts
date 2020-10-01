class Employee {
  public id: number;
  public photo: string;
  public name: string;
  public role: string;
  public begin: string;
  public end?: string;
  
  constructor(params: any) {
    this.id = params.id;
    this.photo = params.photo;
    this.name = params.name;
    this.role = params.role;
    this.begin = params.begin;
    this.end = params.end;
  }
}

export default Employee;
