class AccessRecord {
  public id: number;
  public name: string;
  public unit: string;
  public rg: string;
  public kinship?: string;
  public direct: boolean;
  public permanent: boolean;
  public observation?: string;
  
  constructor() {
    this.id = 0;
    this.name = "";
    this.unit = "";
    this.rg = "";
    this.kinship = "";
    this.direct = false;
    this.permanent = false;
    this.observation = "";
  }
}

export default AccessRecord;
