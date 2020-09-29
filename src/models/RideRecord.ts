class RideRecord {
  public static create(id: number, destiny: string, days: string, category: string): RideRecord {
    const item = new RideRecord({id, destiny, days, category});
    return item;
  }

  public id: number;
  public destiny: string;
  public days: string;
  public category: string;

  constructor(params: any) {
    this.id = params.id;
    this.destiny = params.destiny;
    this.days = params.days;
    this.category = params.category;
  }
}

export default RideRecord;
