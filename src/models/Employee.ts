class Employee {
  public id: number;
  public photo: string;
  public name: string;
  public role: string;
  public begin: string;
  public end?: string;
  
  constructor() {
    this.id = 0;
    this.photo = "";
    this.name = "";
    this.role = "";
    this.begin = "";
    this.end = "";
  }
}

export default Employee;
