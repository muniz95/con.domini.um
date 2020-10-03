class Occurrence {
  public id: number;
  public name: string;
  public foundBy: string;
  public createdBy: string;
  public creationDate: Date;
  public status: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.foundBy = params.found_by;
    this.createdBy = params.created_by;
    this.creationDate = new Date(params.created_at);
    this.status = params.status;
  }
}

export default Occurrence;
