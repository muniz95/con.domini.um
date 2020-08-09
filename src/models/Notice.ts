class Notice {
  public id?: number;
  public title: string;
  public date?: Date;

  constructor() {
    this.id = 0;
    this.title = "";
    this.date = new Date();
  }
}

export default Notice;
