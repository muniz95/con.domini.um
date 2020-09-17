type Gender = "male" | "female" | "other";
type MartialStatus = "single" | "married" | "divorced" | "widow" | "stable-union";

class User {
  public id?: number;
  public name!: string;
  public unit!: string;
  public email!: string;
  public login!: string;
  public photo?: string;
  public bio?: string;
  public rg?: string;
  public mobilityRestriction: boolean = false;
  public birthdate: Date;
  public gender: Gender;
  public martialStatus: MartialStatus;
  public visibility: boolean = true;
  
  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.unit = params.unit;
    this.email = params.email;
    this.login = params.login;
    this.photo = params.photo;
    this.bio = params.bio;
    this.rg = params.rg;
    this.mobilityRestriction = params.mobilityRestriction;
    this.birthdate = params.birthdate;
    this.gender = params.gender;
    this.martialStatus = params.martialStatus;
    this.visibility = params.visibility;
  }
}

export default User;