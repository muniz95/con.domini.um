class ProviderRecord {
  public id: number;
  public name: string;
  public unit: string;
  public date: Date;
  public ownerAtHome: boolean;
  public rg: string;
  public reason?: string;
  public observation?: string;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.unit = params.unit;
    this.date = new Date(params.created_at);
    this.ownerAtHome = params.owner_at_home;
    this.rg = params.rg;
    this.reason = params.reason;
    this.observation = params.observation;
  }
}

export default ProviderRecord;
