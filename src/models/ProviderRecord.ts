class ProviderRecord {
  public id: number;
  public name: string;
  public unit: string;
  public date: Date;
  public ownerAtHome: boolean;
  public rg: string;
  public reason?: string;
  public observation?: string;
  
  constructor() {
    this.id = 0;
    this.name = "";
    this.unit = "";
    this.date = new Date();
    this.ownerAtHome = false;
    this.rg = "";
    this.reason = "";
    this.observation = "";
  }
}

export default ProviderRecord;
