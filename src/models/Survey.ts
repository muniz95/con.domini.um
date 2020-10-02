class Survey {
  public static create(id: number, title: string, closingDate: Date, voted?: boolean): Survey {
    const item = new Survey({id, title, closingDate, voted});
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

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.closingDate = new Date(params.closing_date);
    this.voted = params.voted;
  }
}

export default Survey;
