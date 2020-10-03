class Poll {
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

export default Poll;
