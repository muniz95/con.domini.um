class Occurrence {
  public id: number;
  public name: string;
  public foundBy: string;
  public createdBy: string;
  public creationDate: Date;
  public status: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.foundBy = "";
    this.createdBy = "";
    this.creationDate = new Date();
    this.status = "";
  }
}

export default Occurrence;
