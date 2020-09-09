class Pet {
  public id: number;
  public name: string;
  public race: string;
  public petType?: string;
  
  constructor() {
    this.id = 0;
    this.name = "";
    this.race = "";
    this.petType = "";
  }
}

export default Pet;
