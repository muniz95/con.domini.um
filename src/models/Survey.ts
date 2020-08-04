class Survey {
  public static create(id: number, title: string, closingDate: Date, voted?: boolean): Survey {
    const item = new Survey();
    item.id = id;
    item.title = title;
    item.closingDate = closingDate;
    item.voted = voted;
    return item;
  }

  public id: number;
  public title: string;
  public closingDate: Date;
  public voted?: boolean;

  constructor() {
    this.id = 0;
    this.title = "";
    this.closingDate = new Date();
    this.voted = undefined;
  }
}

export default Survey;
