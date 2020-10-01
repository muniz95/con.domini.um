class Collaborator {
  public id?: number;
  public name?: string;
  public role?: string;
  public startWork?: string;
  public endWork?: string;
  
  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.role = params.role;
    this.startWork = params.startWork;
    this.endWork = params.endWork;
  }
}

export default Collaborator;
