class Poll {
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

export default Poll;
