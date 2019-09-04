class RideRecord {
  public static create(id: number, destiny: string, days: string, type: string): RideRecord {
    const item = new RideRecord();
    item.id = id;
    item.destiny = destiny;
    item.days = days;
    item.type = type;
    return item;
  }

  public id: number;
  public destiny: string;
  public days: string;
  public type: string;

  constructor() {
    this.id = 0;
    this.destiny = "";
    this.days = "";
    this.type = "";
  }
}

export default RideRecord;
