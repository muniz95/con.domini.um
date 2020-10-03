class Pet {
  public id: number;
  public name: string;
  public race: string;
  public category?: string;
  
  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.race = params.race;
    this.category = params.category;
  }
}

export default Pet;
