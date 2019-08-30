class Assembly {
  public id: number;
  public title: string;
  public date: Date;
  public confirmed: boolean;

  constructor() {
    this.confirmed = false;
    this.date = new Date();
    this.id = 0;
    this.title = "";
  }
}

export default Assembly;
