interface Dweller {
  id?: number;
  name: string;
  rg: string;
  kinship: string;
  birthdate: Date;
  mobilityRestriction: boolean;
  userId: number;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.rg = params.rg;
    this.kinship = params.kinship;
    this.birthdate = new Date(params.birthdate);
    this.mobilityRestriction = params.mobilityRestriction;
    this.userId = params.userId;
  }

  get age() {
    const ageDifMs = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
  }

  get hasMobilityRestriction() {
    return this.mobilityRestriction ? 'Sim' : 'Não';
  }
}

export default Dweller;
