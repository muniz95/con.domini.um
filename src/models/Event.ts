class Event {
  public static create(id: number, title: string, local: string, date: Date, attending?: boolean): Event {
    const item = new Event();
    item.id = id;
    item.title = title;
    item.local = local;
    item.date = date;
    item.attending = attending;
    return item;
  }

  public id: number;
  public title: string;
  public local: string;
  public date: Date;
  public attending?: boolean;

  constructor() {
    this.id = 0;
    this.title = "";
    this.local = "";
    this.date = new Date();
    this.attending = undefined;
  }
}

export default Event;
