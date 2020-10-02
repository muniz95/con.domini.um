class AccessRecord {
  public id: number;
  public name: string;
  public unit: string;
  public rg: string;
  public kinship?: string;
  public direct: boolean;
  public permanent: boolean;
  public observation?: string;
  
  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.unit = params.unit;
    this.rg = params.rg;
    this.kinship = params.kinship;
    this.direct = params.direct;
    this.permanent = params.permanent;
    this.observation = params.observation;
  }
}

export default AccessRecord;
