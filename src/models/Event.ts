class Event {
  public static create(id: number, title: string, local: string, date: Date, attending?: boolean): Event {
    const item = new Event({id, title, local, date, attending});
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

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.local = params.local;
    this.date = new Date(params.date);
    this.attending = params.attending;
  }
}

export default Event;
