class Dweller {
  public id?: number;
  public name: string;
  public rg: string;
  public kinship: string;
  public birthdate: Date;
  public mobilityRestriction: boolean;
  
  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.rg = params.rg;
    this.kinship = params.kinship;
    this.birthdate = params.birthdate;
    this.mobilityRestriction = params.mobilityRestriction;
  }
  
  get age() {
    const ageDifMs = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  get hasMobilityRestriction() {
    return this.mobilityRestriction ? "Sim" : "Não";
  }
}

export default Dweller;